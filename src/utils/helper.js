import { useMediaQuery } from '@chakra-ui/react'
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase-config';
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { useQuery } from '@tanstack/react-query'
import FetchAxiosWithSpoon from './FetchAxiosWithSpoon';
import Home from '../pages/Home';

const ResponsiveWidth = () => {
  const [minWidth501] = useMediaQuery('(min-width: 501px)')
  return minWidth501
}

const UploadImage = (file, filePath, setProgress) => {
  return new Promise((resolve, reject) => {
    // create a ref for the image url
    const storageRef = ref(storage, filePath)
    // handle download progress
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
      (snapshot) => {
        // progress in percent
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // get progress value
        setProgress(progress)
      },
      (error) => {
        reject(error);
      },
      async () => {
        try {
          // upload an image
          await uploadBytes(storageRef, file);
          // get the image url
          const url = await getDownloadURL(storageRef);
          resolve(url);
        } catch (error) {
          reject(error);
        }
      }
    )
  })
}

UploadImage.propTypes = {
  file: PropTypes.string.isRequired,
  filePath: PropTypes.string.isRequired,
  setProgress: PropTypes.number.isRequired
}

const useSpoon = (thingSearched, filter) => {
  const { data } = useQuery([thingSearched, filter], () => FetchAxiosWithSpoon(filter))
  return data
}

useSpoon.propTypes = {
  thingSearched: PropTypes.string.isRequired,
  filter: PropTypes.object.isRequired
}

const PrivateRoute = () => {
  const { currentUser } = useAuth()
  return currentUser ? <Outlet /> : <Home />
}

export { ResponsiveWidth, UploadImage, useSpoon, PrivateRoute }