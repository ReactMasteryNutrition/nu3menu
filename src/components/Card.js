// Imports //
import { Box, Image, Link, Text } from '@chakra-ui/react'
import { IconContext } from 'react-icons/lib/esm/iconContext'
import { IoEnter, IoStar } from 'react-icons/io5'

// Functions //

export default function Card() {
    const falseResponseApi = [
        {
                title: 'Titre Menu 1',
                gradeReview: '2.2',
                imageUrl: 'https://st.depositphotos.com/1005573/2814/i/600/depositphotos_28144633-stock-photo-health-food-platter.jpg',
                imageAlt: 'Menu 1',
                description: 'Lorem ipsum dolor sit amet. Et velit doloremque et ullam corrupti qui dolores voluptas. Fugit debitis aut temporibus omnis est quisquam animi et exercitationem possimus et praesentium quam.',
        },
        {
                title: 'Titre Menu 2',
                gradeReview: '4.2',
                imageUrl: 'https://cdn.pratico-pratiques.com/app/uploads/sites/2/2018/08/29094727/poisson-tout-en-un-au-four-600x600.jpeg',
                imageAlt: 'Menu 2',
                description: 'In sint dolor rem voluptatem molestiae ea quas distinctio et nemo obcaecati quo doloremque voluptas. Et numquam sequi ut voluptates ipsam et blanditiis nobis qui atque nihil.',
        },
        {
                title: 'Titre Menu 3',
                gradeReview: '4.4',
                imageUrl: 'https://www.bistrot-mimi-restaurant-marseille.com/media/cache/l600/websites/3611a381e0faf4e9115db6db166f9810/img/image01_20220210112914.jpg',
                imageAlt: 'Menu 3',
                description: 'Qui adipisci eveniet et corrupti exercitationem et autem fuga ut saepe mollitia ad eligendi neque aut deleniti blanditiis. Eos voluptate voluptatem eum maiores dolor quo eaque possimus.',
        },
        {
                title: 'Titre Menu 4',
                gradeReview: '3.3',
                imageUrl: 'https://assets.afcdn.com/album/D20191108/phalbm25850964.jpg',
                imageAlt: 'Menu 4',
                description: 'Ab galisum obcaecati sit ratione quisquam in beatae necessitatibus et dignissimos suscipit non dolore vero. In natus quod est maiores necessitatibus est sint possimus est consequatur aliquid rem recusandae dicta!',
        },
        {
            title: 'Titre Menu 5',
            gradeReview: '4.1',
            imageUrl: 'https://cdn.pratico-pratiques.com/app/uploads/sites/3/2020/09/16091448/gratin-dauphinois-a-la-viande-a-fondue-600x600.jpg',
            imageAlt: 'Menu 5',
            description: 'Quo nesciunt nemo aut facilis sunt et sint voluptates ut quasi voluptas eos aliquam molestiae et illo repellendus. Et galisum magni sit nisi cumque ex cumque corporis.',
        },
        {
            title: 'Titre Menu 6',
            gradeReview: '4.4',
            imageUrl: 'https://www.sublimeurs.fr/wp-content/uploads/saisons-cuisine.jpg',
            imageAlt: 'Menu 6',
            description: 'Eum voluptas voluptas sed pariatur aperiam rem veniam beatae quo Quis libero et quia nobis. Aut voluptates architecto hic voluptas maxime non sint voluptas cum vero fugiat et itaque fugit!',
        },
    ]
    return(
        <Box w='100%' minH='100%' display='flex' flexDirection={['column', 'row', 'row', 'row']} flexWrap='wrap' justifyContent='center'>
            {falseResponseApi.map(recipe => {
                return(
                    <Box key={falseResponseApi.indexOf(recipe)} w={[280, 300]} mt='1.5em' marginX='auto' p='0.5em' position='relative' display='flex' flexDir='column' alignItems='center' overflow='hidden' borderRadius='md' bg='gray.400'>
                        <IconContext.Provider value={{ color: '#F0FFF4', margin: '1em', size: '2em'}}>
                            <Box position='absolute' top='0' left='0' display='flex' alignItems='center' p='0.5em' minW='33%' minH='20%' borderBottomRightRadius='full' color='green.50' bg='green.700' opacity='0.72'>
                                <IoStar/>
                                <Text pl='0.5em' fontSize='lg'>{recipe.gradeReview}</Text>
                            </Box>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ size: '3em', color: '#276749'}}>
                            <Box display='flex' flexDirection={['row', 'column', 'column', 'column']}>
                                <Image src={recipe.imageUrl} alt={recipe.imageAlt} boxSize={[112, 280, 280, 280]} objectFit='cover' borderRadius='md'/>
                                <Box>
                                    <Text fontSize={['lg', 'lg', 'xl','xl']} fontWeight='bold' textAlign='center'>{recipe.title}</Text>
                                    <Text noOfLines={2} ml={['0.5em', 0]}>{recipe.description}</Text>
                                    <Box display='flex' justifyContent='right'>
                                        <Link>
                                            <IoEnter/>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </IconContext.Provider>
                    </Box>
                )
            })}
        </Box>
    )
}