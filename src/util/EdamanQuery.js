const example_simple_query = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=beef&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&imageSize=LARGE`


let last_query_test = 'https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=beef&app_id=9aa229ff&app_key=b0cc99c6ca952ed1d898610b97dece87&calories=1000&nutrients%5BCHOCDF%5D=100%2B&nutrients%5BFAT%5D=100&nutrients%5BPROCNT%5D=100-400'

let last_query_test_bis = 'https://api.edamam.com/api/recipes/v2&type=public&beta=true&q=beef&app_id=9aa229ff&app_key=b0cc99c6ca952ed1d898610b97dece87&calories=1000&nutrients%5BCHOCDF%5D=100%2B&nutrients%5BFAT%5D=100&nutrients%5BPROCNT%5D=100-400'

const id_api_que_puedo_desarrolar = '&app_id=9aa229ff' 

const key_api_que_puedo_desarrolar = '&app_key=b0cc99c6ca952ed1d898610b97dece87'

const query_introduction = "https://api.edamam.com/api/recipes/v2?type=public&beta=true"

const searched_variable = "&q=beef" // &q={Input Value}

const id_api = "&app_id=8f26e47b" // A mettre en variable d'environnement et à sécuriser &app_id={Api_ID}

const key_api = "&app_key=ba2508027662216c72a12b54a7bbfcb0" // A mettre en variable d'environnement et à sécuriser &app_key={key}

const ingredients_min = "&ingr=20%2B" // si min seul &ingr={min}%2B

const ingredients_max = "&ingr=5" // Si max seul &ingr={max}

const ingredients_min_max = "&ingr=5-10" // Si min & max &ingr={min}-{max}

const diet_labels_filter = "&diet=high-protein&diet=low-fat" // &diet={diet_label} pour chaque label sélectionné parmi ["", "balances", "high-fiber", "high-protein", "low-carb", "low-fat", "low-sodium", ]

const health_labels_filter = "&health=gluten-free&health=immuno-supportive" // &health={health_label} pour chaque label sélectionné parmi ["", "alcohol-cocktail", "alcohol-free", "celery-free", "crustacean-free", "dairy-free", "DASH", "egg-free", "fish-free", "fodmap-free", "gluten-free", "immuno-supportive", "keto-friendly", "kidney-friendly", "kosher", "low-fat-abs", "low-potassium", "low-sugar", "lupine-free", "Mediterranean", "mollusk-free", "mustard-free", "no-oil-added", "paleo", "peanut-free", "pescatarian", "pork-free", "red-meat-free", "sesame-free", "sellfish-free", "soy-free", "sugar-conscious", "sulfite-free", "tree-nut-free", "vegan", "vegetarian", "wheat-free",]

const cuisine_types_filter = "&cuisineType=Asian&cuisineType=French" // &cuisineType={cuisine_type} pour chaque type de cuisine sélectionné parmi ["", "American", "Asian", "British", "Caribbean", "Central Europe", "Chinese", "Eastern Europe", "French", "Indian", "Italian", "Japanese", "Kosher", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "South American", "South East Asian", ] remplacer les espaces par "%20"   (hexa)

const meal_types_filter = "&mealType=Snack" // &mealType={meal_type} pour chaque type de repas parmi ["", "Breakfast", "Dinner", "Lunch", "Snack", "Teatime", ] 

const dish_types_filter = "&dishType=Bread" // &dishType={dish_type} pour chaque type de plat parmi ["", "Biscuits and cookies", "Bread", "Cereals", "Condiments and sauces", "Desserts", "Drinks", "Main course", "Pancake", "Preps", "Preserve", "Salad", "Sandwiches", "Side dish", "Soup", "Starter", "Sweets",]

const calories_min = "&calories=500%2B" // &calories={min}%2B

const calories_max = "&calories=500" // &calories={max}

const calories_min_max = "&calories=500-700" // &calories={min}-{max}

const time_min = "&time=1%2B" // &time={min}%2B avec temps exprimé en minutes

const time_max = "&time=20" // &time={max} avec temps exprimé en minutes

const time_min_max = "&time=20-40" // &time={min}-{max} avec temps exprimé en minutes

const image_size = "&imageSize=LARGE" // &imageSize={size} size = THUMBNAIL || SMALL || REGULAR || LARGE

const glycemicIndex ="" // Non pris en charge par le pack gratuit

const carbohydrate_min = "&nutrients%5BCHOCDF%5D=30%2B" // &nutrients%5BCHOCDF%5D={min}%2B

const carbohydrate_max = "&nutrients%5BCHOCDF%5D=30" // &nutrients%5BCHOCDF%5D={max}

const carbohydrate_min_max = "&nutrients%5BCHOCDF%5D=30-40" // &nutrients%5BCHOCDF%5D={min}-{max}

const lipid_min = "&nutrients%5BFAT%5D=30%2B" // &nutrients%5BFAT%5D={min}%2B

const lipid_max = "&nutrients%5BFAT%5D=30" // &nutrients%5BFAT%5D={max}

const lipid_min_max = "&nutrients%5BFAT%5D=30-50" // &nutrients%5BFAT%5D={min}-{max}

const protein_min = "&nutrients%5BPROCNT%5D=10%2B" // &nutrients%5BPROCNT%5D={min}%2B

const protein_max = "&nutrients%5BPROCNT%5D=10" // &nutrients%5BPROCNT%5D={max}

const protein_min_max = "&nutrients%5BPROCNT%5D=10-20" // &nutrients%5BPROCNT%5D={min}-{max}

const example_response_1 = 
{
    "from": 1,
    "to": 20,
    "count": 10000,
    "_links": {
      "next": {
        "href": "https://api.edamam.com/api/recipes/v2?q=beef&app_key=ba2508027662216c72a12b54a7bbfcb0&_cont=CHcVQBtNNQphDmgVQntAEX4BYlNtAAUAS2JIB2MUalN7AwYVX3dEBzNHZARyBQEARjZBAjcQZQd1VQQAF2ZIUDQRZFN2DBFqX3cWQT1OcV9xBB8VADQWVhFCPwoxXVZEITQeVDcBaR4-SQ%3D%3D&imageSize=LARGE&type=public&app_id=8f26e47b&beta=true",
        "title": "Next page"
      }
    },
    "hits": [
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_321f22ade4bdf65d6166eca828bb53fc",
          "label": "Beef Tacos",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/219/219b9268b0f84eecf0cab133498b7ef3.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ebcecf452159f70900ad89fe4f69fae6a6477637e5859b18064b9ae8ac29cb00",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/219/219b9268b0f84eecf0cab133498b7ef3-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=79ab973378f04812ebf4d836d2cae15297cbc933c0cc3959062bc95d6cf40f1c",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/219/219b9268b0f84eecf0cab133498b7ef3-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f69de641fd04d280c25e2d5f6d0cbd75a1dbeae685f49a512ffc7db07c70b979",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/219/219b9268b0f84eecf0cab133498b7ef3.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ebcecf452159f70900ad89fe4f69fae6a6477637e5859b18064b9ae8ac29cb00",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/219/219b9268b0f84eecf0cab133498b7ef3-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a031923db799553a1ba33b0568664e8ddfa2da46c6afb2f3697898c588ba1deb",
              "width": 600,
              "height": 600
            }
          },
          "source": "No Recipes",
          "url": "http://norecipes.com/blog/2009/05/28/beef-tacos-recipe/",
          "shareAs": "http://www.edamam.com/recipe/beef-tacos-321f22ade4bdf65d6166eca828bb53fc/beef",
          "yield": 8,
          "dietLabels": [],
          "healthLabels": [
            "Sugar-Conscious",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Kosher"
          ],
          "cautions": [
            "Eggs",
            "Milk",
            "Sulfites"
          ],
          "ingredientLines": [
            "1/2 medium onion chopped",
            "2 cloves garlic minced",
            "1 lbs sliced or lean ground beef",
            "2 Tbs chili powder",
            "1 tsp kosher salt",
            "1/2 tsp sugar",
            "12 corn tortillas",
            "1 recipe salsa verde",
            "cilantro",
            "lime wedges"
          ],
          "ingredients": [
            {
              "text": "1/2 medium onion chopped",
              "quantity": 0.5,
              "measure": "<unit>",
              "food": "onion",
              "weight": 55,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "2 cloves garlic minced",
              "quantity": 2,
              "measure": "clove",
              "food": "garlic",
              "weight": 6,
              "foodCategory": "vegetables",
              "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
              "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
              "text": "1 lbs sliced or lean ground beef",
              "quantity": 1,
              "measure": "pound",
              "food": "ground beef",
              "weight": 453.59237,
              "foodCategory": "meats",
              "foodId": "food_boq91pbbhklr6sb0d9sbybzgklkm",
              "image": "https://www.edamam.com/food-img/cfa/cfae8f9276eaf8f0d9349ba662744a0c.jpg"
            },
            {
              "text": "2 Tbs chili powder",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "chili powder",
              "weight": 16,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
              "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
            },
            {
              "text": "1 tsp kosher salt",
              "quantity": 1,
              "measure": "teaspoon",
              "food": "kosher salt",
              "weight": 4.854166666912875,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "1/2 tsp sugar",
              "quantity": 0.5,
              "measure": "teaspoon",
              "food": "sugar",
              "weight": 2.1,
              "foodCategory": "sugars",
              "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
              "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
              "text": "12 corn tortillas",
              "quantity": 12,
              "measure": "<unit>",
              "food": "corn tortillas",
              "weight": 288,
              "foodCategory": "quick breads and pastries",
              "foodId": "food_bhw0b95agm97s0abfignnb8fsvb3",
              "image": "https://www.edamam.com/food-img/b8a/b8ad23dcc06f2324f944e47eb579d644.jpg"
            },
            {
              "text": "1 recipe salsa verde",
              "quantity": 1,
              "measure": "<unit>",
              "food": "salsa",
              "weight": 8.9,
              "foodCategory": "canned soup",
              "foodId": "food_b0t3obfawlm5k2b6erxscacez35u",
              "image": "https://www.edamam.com/food-img/995/995d0f166754a0475c181b9c156fec43.jpg"
            },
            {
              "text": "cilantro",
              "quantity": 0,
              "measure": null,
              "food": "cilantro",
              "weight": 8.42821536666913,
              "foodCategory": "vegetables",
              "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
              "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
            },
            {
              "text": "lime wedges",
              "quantity": 1,
              "measure": "wedge",
              "food": "lime",
              "weight": 8.375,
              "foodCategory": "fruit",
              "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
              "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
            }
          ],
          "calories": 1871.1836093343338,
          "totalCO2Emissions": 45780.983969937435,
          "co2EmissionsClass": "G",
          "totalWeight": 849.002929818369,
          "totalTime": 0,
          "cuisineType": [
            "mexican"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1871.1836093343338,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 101.37198071990669,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 36.11953001985135,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 5.3523899660000005,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 42.67537673985834,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 7.773398783846668,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 147.52550050395675,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 25.40369003026673,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 8.738122973690022,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 2.0958,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 97.81321591631007,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 322.05058270000006,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1968.2760058584822,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 402.96404356407635,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 319.36561233985094,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2254.808488616482,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 15.572275626680653,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 23.655141987285045,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1702.7049879760011,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 286.130280585675,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 10.935843149000666,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.5543391233956683,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.0625501875940042,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 25.65970979908469,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.602786645996337,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 67.51295942733486,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 67.51295942733486,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 9.706876718000002,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.4535923700000001,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 8.03341741316673,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 51.950180296674304,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 490.152186397509,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 93.55918046671668,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 155.95689341524107,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 180.59765009925673,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 49.17516683465225,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 101.61476012106692,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 195.62643183262014,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 107.35019423333335,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 82.01150024410342,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 40.296404356407635,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 76.03943150948831,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 47.9746486939677,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 86.51264237044808,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 215.04674533895496,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 243.2435697108573,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 31.79225339840833,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 12.150936832222962,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 46.19492694963902,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 81.73462981492341,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 160.3731862442793,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 200.21435738433362,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 16.878239856833716,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 404.4531965833334,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.0239491333333337,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 53.55611608777819,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 43.29181691389525,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 101.37198071990669,
              "hasRDI": true,
              "daily": 155.95689341524107,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 36.11953001985135,
                  "hasRDI": true,
                  "daily": 180.59765009925673,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 5.3523899660000005,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 42.67537673985834,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 7.773398783846668,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 147.52550050395675,
              "hasRDI": true,
              "daily": 49.17516683465225,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 25.40369003026673,
                  "hasRDI": true,
                  "daily": 101.61476012106692,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 8.738122973690022,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 2.0958,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 97.81321591631007,
              "hasRDI": true,
              "daily": 195.62643183262014,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 322.05058270000006,
              "hasRDI": true,
              "daily": 107.35019423333335,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1968.2760058584822,
              "hasRDI": true,
              "daily": 82.01150024410342,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 402.96404356407635,
              "hasRDI": true,
              "daily": 40.296404356407635,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 319.36561233985094,
              "hasRDI": true,
              "daily": 76.03943150948831,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2254.808488616482,
              "hasRDI": true,
              "daily": 47.9746486939677,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 15.572275626680653,
              "hasRDI": true,
              "daily": 86.51264237044808,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 23.655141987285045,
              "hasRDI": true,
              "daily": 215.04674533895496,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1702.7049879760011,
              "hasRDI": true,
              "daily": 243.2435697108573,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 286.130280585675,
              "hasRDI": true,
              "daily": 31.79225339840833,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 10.935843149000666,
              "hasRDI": true,
              "daily": 12.150936832222962,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.5543391233956683,
              "hasRDI": true,
              "daily": 46.19492694963902,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.0625501875940042,
              "hasRDI": true,
              "daily": 81.73462981492341,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 25.65970979908469,
              "hasRDI": true,
              "daily": 160.3731862442793,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.602786645996337,
              "hasRDI": true,
              "daily": 200.21435738433362,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 67.51295942733486,
              "hasRDI": true,
              "daily": 16.878239856833716,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 67.51295942733486,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 9.706876718000002,
              "hasRDI": true,
              "daily": 404.4531965833334,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.4535923700000001,
              "hasRDI": true,
              "daily": 3.0239491333333337,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 8.03341741316673,
              "hasRDI": true,
              "daily": 53.55611608777819,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 51.950180296674304,
              "hasRDI": true,
              "daily": 43.29181691389525,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 490.152186397509,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/321f22ade4bdf65d6166eca828bb53fc?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_99feb9b00e639797c5d440bbbba06b08",
          "label": "Beef Kreplach",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/318/3187f6fd226d5b4ed2e5a4bdb6b71167.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7aaec213fbeede99c1de3a6a577c4c3b0ec039193acf2aa1c1063abc25417a02",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/318/3187f6fd226d5b4ed2e5a4bdb6b71167-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1e9515a2514e24e6308e170e7f77659a212655c291d15c00fc63969262af3d03",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/318/3187f6fd226d5b4ed2e5a4bdb6b71167-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1905e1f4867055eef6a8e2c01e50ab5f7cd15c4544c44190b5a8c3eaa21f6158",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/318/3187f6fd226d5b4ed2e5a4bdb6b71167.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7aaec213fbeede99c1de3a6a577c4c3b0ec039193acf2aa1c1063abc25417a02",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/318/3187f6fd226d5b4ed2e5a4bdb6b71167-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ce2dcb7d4cfb932fd073c3a893e0623ab8e2ca4faef42d837c0455f92513047b",
              "width": 600,
              "height": 600
            }
          },
          "source": "Ruhlman",
          "url": "http://ruhlman.com/2012/02/kreplach-dumplings/",
          "shareAs": "http://www.edamam.com/recipe/beef-kreplach-99feb9b00e639797c5d440bbbba06b08/beef",
          "yield": 10,
          "dietLabels": [],
          "healthLabels": [
            "Sugar-Conscious",
            "Kidney-Friendly",
            "Dairy-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Gluten",
            "Wheat"
          ],
          "ingredientLines": [
            "2 cups flour, plus more for dusting",
            "4 eggs",
            "1/4 cup water",
            "1 pound cooked beef, diced",
            "1/2 onion, diced and sauteed till transluscent, cooled",
            "salt to taste",
            "1 teaspoon black pepper",
            "2 teaspoons sweet Hungarian paprika",
            "oil for pan frying"
          ],
          "ingredients": [
            {
              "text": "2 cups flour, plus more for dusting",
              "quantity": 2,
              "measure": "cup",
              "food": "flour",
              "weight": 250,
              "foodCategory": "grains",
              "foodId": "food_ahebfs0a985an4aubqaebbipra58",
              "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
            },
            {
              "text": "4 eggs",
              "quantity": 4,
              "measure": "<unit>",
              "food": "eggs",
              "weight": 172,
              "foodCategory": "Eggs",
              "foodId": "food_bhpradua77pk16aipcvzeayg732r",
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "1/4 cup water",
              "quantity": 0.25,
              "measure": "cup",
              "food": "water",
              "weight": 59.25,
              "foodCategory": "water",
              "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
              "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
              "text": "1 pound cooked beef, diced",
              "quantity": 1,
              "measure": "pound",
              "food": "cooked beef",
              "weight": 453.59237,
              "foodCategory": "meats",
              "foodId": "food_awguoazatp13reamvtskmaa4p0bw",
              "image": "https://www.edamam.com/food-img/80c/80c1e51808bb81a0347bfd6eba75ed90.jpg"
            },
            {
              "text": "1/2 onion, diced and sauteed till transluscent, cooled",
              "quantity": 0.5,
              "measure": "<unit>",
              "food": "onion",
              "weight": 62.5,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "salt to taste",
              "quantity": 0,
              "measure": null,
              "food": "salt",
              "weight": 6.029054220000001,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "1 teaspoon black pepper",
              "quantity": 1,
              "measure": "teaspoon",
              "food": "black pepper",
              "weight": 2.9,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "2 teaspoons sweet Hungarian paprika",
              "quantity": 2,
              "measure": "teaspoon",
              "food": "paprika",
              "weight": 4.6,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
              "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
            },
            {
              "text": "oil for pan frying",
              "quantity": 0,
              "measure": null,
              "food": "oil",
              "weight": 13.665856232,
              "foodCategory": "Oils",
              "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
              "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
            }
          ],
          "calories": 2201.98636689088,
          "totalCO2Emissions": 71834.86993278029,
          "co2EmissionsClass": "G",
          "totalWeight": 1023.1933685753563,
          "totalTime": 0,
          "cuisineType": [
            "central europe"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "starter"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2201.98636689088,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 65.60953145,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 19.953869330486803,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.9563892306164004,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 31.457240798360324,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 10.421796977809441,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 202.18899,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 10.1516,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 4.4556000000000004,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 196.43961101300005,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1075.2886752,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2368.520509937992,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 251.5886370624055,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 195.46667282343356,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2168.721776887469,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 21.21566749173308,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 41.83143914134335,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1659.2219851000002,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 393.8169237,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 4.6664,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.733376659,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.9943696799000001,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 22.025068808100002,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.874966468500001,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 196.74938959999997,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 196.74938959999997,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 14.458182545000003,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.8935923699999995,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 6.3129885791072,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 26.958333413416,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 546.3923511976868,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 110.099318344544,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 100.9377406923077,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 99.76934665243401,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 67.39632999999999,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 40.6064,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 392.87922202600004,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 358.4295584,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 98.68835458074966,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 25.15886370624055,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 46.53968400557942,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 46.143016529520615,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 117.86481939851711,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 380.28581037584865,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 237.0317121571429,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 43.75743596666667,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 5.1848888888888895,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 61.11472158333334,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 153.4130523,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 137.65668005062503,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 221.1512668076924,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 49.18734739999999,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 602.4242727083335,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 25.957282466666662,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 42.08659052738133,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 22.46527784451333,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 65.60953145,
              "hasRDI": true,
              "daily": 100.9377406923077,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 19.953869330486803,
                  "hasRDI": true,
                  "daily": 99.76934665243401,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.9563892306164004,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 31.457240798360324,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 10.421796977809441,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 202.18899,
              "hasRDI": true,
              "daily": 67.39632999999999,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 10.1516,
                  "hasRDI": true,
                  "daily": 40.6064,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 4.4556000000000004,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 196.43961101300005,
              "hasRDI": true,
              "daily": 392.87922202600004,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1075.2886752,
              "hasRDI": true,
              "daily": 358.4295584,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 2368.520509937992,
              "hasRDI": true,
              "daily": 98.68835458074966,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 251.5886370624055,
              "hasRDI": true,
              "daily": 25.15886370624055,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 195.46667282343356,
              "hasRDI": true,
              "daily": 46.53968400557942,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2168.721776887469,
              "hasRDI": true,
              "daily": 46.143016529520615,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 21.21566749173308,
              "hasRDI": true,
              "daily": 117.86481939851711,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 41.83143914134335,
              "hasRDI": true,
              "daily": 380.28581037584865,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1659.2219851000002,
              "hasRDI": true,
              "daily": 237.0317121571429,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 393.8169237,
              "hasRDI": true,
              "daily": 43.75743596666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 4.6664,
              "hasRDI": true,
              "daily": 5.1848888888888895,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.733376659,
              "hasRDI": true,
              "daily": 61.11472158333334,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.9943696799000001,
              "hasRDI": true,
              "daily": 153.4130523,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 22.025068808100002,
              "hasRDI": true,
              "daily": 137.65668005062503,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.874966468500001,
              "hasRDI": true,
              "daily": 221.1512668076924,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 196.74938959999997,
              "hasRDI": true,
              "daily": 49.18734739999999,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 196.74938959999997,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 14.458182545000003,
              "hasRDI": true,
              "daily": 602.4242727083335,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 3.8935923699999995,
              "hasRDI": true,
              "daily": 25.957282466666662,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 6.3129885791072,
              "hasRDI": true,
              "daily": 42.08659052738133,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 26.958333413416,
              "hasRDI": true,
              "daily": 22.46527784451333,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 546.3923511976868,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/99feb9b00e639797c5d440bbbba06b08?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_710678b0fae9d4fa004975ef91aae1a3",
          "label": "Beef Brisket",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/deb/debce0693c8d8a6988af80e1f94e4c4c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=78fa058a49c448a41682f71147f9c348440ffc0cba776fb017e5f6a307fc4ca9",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/deb/debce0693c8d8a6988af80e1f94e4c4c-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=65110fffb77fc93d0f3e3a47a5214987347f99161381dc3afa4463e0527c8505",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/deb/debce0693c8d8a6988af80e1f94e4c4c-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d4d1abd99e57aa1701c6fb91f8ee7e12f5af2fe7faa2f14f383c4afe895b47a3",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/deb/debce0693c8d8a6988af80e1f94e4c4c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=78fa058a49c448a41682f71147f9c348440ffc0cba776fb017e5f6a307fc4ca9",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/deb/debce0693c8d8a6988af80e1f94e4c4c-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=41670b2d0df0aaafffc6d1a6b3597367b6a927df9a4d5137f551f99cfd2b2fea",
              "width": 600,
              "height": 600
            }
          },
          "source": "Simply Recipes",
          "url": "http://simplyrecipes.com/recipes/beef_brisket/",
          "shareAs": "http://www.edamam.com/recipe/beef-brisket-710678b0fae9d4fa004975ef91aae1a3/beef",
          "yield": 8,
          "dietLabels": [
            "High-Protein",
            "Low-Carb"
          ],
          "healthLabels": [
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "No oil added",
            "Kosher"
          ],
          "cautions": [
            "Gluten",
            "Wheat",
            "Sulfites",
            "FODMAP"
          ],
          "ingredientLines": [
            "3 to 4 lbs of a brisket cut of beef",
            "3/4 cup barbeque sauce",
            "1/4 cup soy sauce",
            "1 cup of water"
          ],
          "ingredients": [
            {
              "text": "3 to 4 lbs of a brisket cut of beef",
              "quantity": 3.5,
              "measure": "pound",
              "food": "beef",
              "weight": 1587.5732950000001,
              "foodCategory": "meats",
              "foodId": "food_bknby1la98smrsbwnthinbam42nj",
              "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
            },
            {
              "text": "3/4 cup barbeque sauce",
              "quantity": 0.75,
              "measure": "cup",
              "food": "barbeque sauce",
              "weight": 214.5,
              "foodCategory": "canned soup",
              "foodId": "food_avt8j2wabi4myjaafpo4makv3lqn",
              "image": "https://www.edamam.com/food-img/7e3/7e303aa2cbb51e4bd70f71bf5cb4a754.jpg"
            },
            {
              "text": "1/4 cup soy sauce",
              "quantity": 0.25,
              "measure": "cup",
              "food": "soy sauce",
              "weight": 63.75,
              "foodCategory": "plant-based protein",
              "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
              "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
            },
            {
              "text": "1 cup of water",
              "quantity": 1,
              "measure": "cup",
              "food": "water",
              "weight": 237,
              "foodCategory": "water",
              "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
              "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            }
          ],
          "calories": 2466.5727835000002,
          "totalCO2Emissions": 158246.92638660004,
          "co2EmissionsClass": "G",
          "totalWeight": 2102.823295,
          "totalTime": 0,
          "cuisineType": [
            "british"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2466.5727835000002,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 78.07700048950001,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 31.704019604600003,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 3.9689332375000004,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 40.0800797045,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 5.3057847145,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 92.499612954,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 2.4405,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 71.5548,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 350.49901103800005,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1000.17117585,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 6968.36540305,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 305.31702835000004,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 410.82039195000004,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 6696.600890350001,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 35.477456865499995,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 86.83069025950002,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 3593.7590501500003,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 55.3464659,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 1.287,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.3382861360000002,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.9198921015000003,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 80.26522192665,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 9.272641315600001,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 60.84219885,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 60.84219885,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 36.03791379650001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.5875732950000003,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 4.573631931,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 27.674599425000004,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1547.6070819440001,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 123.32863917500002,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 120.11846229153846,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 158.520098023,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 30.833204318,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 9.762,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 700.9980220760001,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 333.39039195,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 290.34855846041665,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 30.531702835000004,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 97.8143790357143,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 142.4808700074468,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 197.09698258611107,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 789.3699114500002,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 513.3941500214286,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 6.149607322222223,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 1.43,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 111.52384466666668,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 224.60708473076923,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 501.6576370415625,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 713.2801012000001,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 15.2105497125,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1501.5797415208337,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 10.583821966666669,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 30.49087954,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 23.062166187500004,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 78.07700048950001,
              "hasRDI": true,
              "daily": 120.11846229153846,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 31.704019604600003,
                  "hasRDI": true,
                  "daily": 158.520098023,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 3.9689332375000004,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 40.0800797045,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 5.3057847145,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 92.499612954,
              "hasRDI": true,
              "daily": 30.833204318,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 2.4405,
                  "hasRDI": true,
                  "daily": 9.762,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 71.5548,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 350.49901103800005,
              "hasRDI": true,
              "daily": 700.9980220760001,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1000.17117585,
              "hasRDI": true,
              "daily": 333.39039195,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 6968.36540305,
              "hasRDI": true,
              "daily": 290.34855846041665,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 305.31702835000004,
              "hasRDI": true,
              "daily": 30.531702835000004,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 410.82039195000004,
              "hasRDI": true,
              "daily": 97.8143790357143,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 6696.600890350001,
              "hasRDI": true,
              "daily": 142.4808700074468,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 35.477456865499995,
              "hasRDI": true,
              "daily": 197.09698258611107,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 86.83069025950002,
              "hasRDI": true,
              "daily": 789.3699114500002,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 3593.7590501500003,
              "hasRDI": true,
              "daily": 513.3941500214286,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 55.3464659,
              "hasRDI": true,
              "daily": 6.149607322222223,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 1.287,
              "hasRDI": true,
              "daily": 1.43,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.3382861360000002,
              "hasRDI": true,
              "daily": 111.52384466666668,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.9198921015000003,
              "hasRDI": true,
              "daily": 224.60708473076923,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 80.26522192665,
              "hasRDI": true,
              "daily": 501.6576370415625,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 9.272641315600001,
              "hasRDI": true,
              "daily": 713.2801012000001,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 60.84219885,
              "hasRDI": true,
              "daily": 15.2105497125,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 60.84219885,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 36.03791379650001,
              "hasRDI": true,
              "daily": 1501.5797415208337,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.5875732950000003,
              "hasRDI": true,
              "daily": 10.583821966666669,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 4.573631931,
              "hasRDI": true,
              "daily": 30.49087954,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 27.674599425000004,
              "hasRDI": true,
              "daily": 23.062166187500004,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1547.6070819440001,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/710678b0fae9d4fa004975ef91aae1a3?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b6446a58a11de8fcd382254713e3f4b9",
          "label": "Dinner Tonight: Beef Miroton",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/340/3402a9680be66922d62a325cb5cdc549.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3eac3baad1fba76eaa3641be6593f892be01ed020ad6b0357e270220ed303c3c",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/340/3402a9680be66922d62a325cb5cdc549-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a3f8868f2ebc4255a1eb0d6558602bde093c1cf9b579151233e29ef38b0e3244",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/340/3402a9680be66922d62a325cb5cdc549-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=33c475cdffcb487d3147b93c56a4e83a0265ed41ce6f2de7bc4a681a1837ad34",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/340/3402a9680be66922d62a325cb5cdc549.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3eac3baad1fba76eaa3641be6593f892be01ed020ad6b0357e270220ed303c3c",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/340/3402a9680be66922d62a325cb5cdc549-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=59a779751bba4c6787e6ffe2481fb4be1e687bbd54f69fc4777aa04981ce7bff",
              "width": 600,
              "height": 600
            }
          },
          "source": "Serious Eats",
          "url": "http://www.seriouseats.com/recipes/2009/04/dinner-tonight-beef-miroton-leftover-roast-beef-recipe.html",
          "shareAs": "http://www.edamam.com/recipe/dinner-tonight-beef-miroton-b6446a58a11de8fcd382254713e3f4b9/beef",
          "yield": 2,
          "dietLabels": [
            "High-Fiber"
          ],
          "healthLabels": [
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "3/4 pounds waxy potatoes",
            "1 pound red onions, thinly sliced",
            "2 tablespoons butter",
            "1 tablespoon flour",
            "1 cup beef or chicken broth",
            "Salt",
            "1/2 pound roast beef or pot roast, sliced 1/4-inch thick",
            "1/2 tablespoon red wine vinegar",
            "2 tablespoons bread crumbs",
            "Sprinkling of chopped parsley"
          ],
          "ingredients": [
            {
              "text": "3/4 pounds waxy potatoes",
              "quantity": 0.75,
              "measure": "pound",
              "food": "potatoes",
              "weight": 340.1942775,
              "foodCategory": "vegetables",
              "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
              "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
            },
            {
              "text": "1 pound red onions, thinly sliced",
              "quantity": 1,
              "measure": "pound",
              "food": "red onions",
              "weight": 453.59237,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "2 tablespoons butter",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "butter",
              "weight": 28.4,
              "foodCategory": "Dairy",
              "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
              "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
              "text": "1 tablespoon flour",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "flour",
              "weight": 7.8124999998679145,
              "foodCategory": "grains",
              "foodId": "food_ahebfs0a985an4aubqaebbipra58",
              "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
            },
            {
              "text": "1 cup beef or chicken broth",
              "quantity": 1,
              "measure": "cup",
              "food": "chicken broth",
              "weight": 240,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "Salt",
              "quantity": 0,
              "measure": null,
              "food": "Salt",
              "weight": 7.906471994997838,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "1/2 pound roast beef or pot roast, sliced 1/4-inch thick",
              "quantity": 0.5,
              "measure": "pound",
              "food": "roast beef",
              "weight": 226.796185,
              "foodCategory": "meats",
              "foodId": "food_a94xddzbba3iwnax9cx3nan3xvea",
              "image": "https://www.edamam.com/food-img/634/634aa9adfb65afb5fef3df13d7334985.jpg"
            },
            {
              "text": "1/2 tablespoon red wine vinegar",
              "quantity": 0.5,
              "measure": "tablespoon",
              "food": "red wine vinegar",
              "weight": 7.45,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_ad6iyy1anmzb49a817rgnabnz8c9",
              "image": "https://www.edamam.com/food-img/dc8/dc8e998b32b8d45ba15c1b1e6711e958.jpg"
            },
            {
              "text": "2 tablespoons bread crumbs",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "bread crumbs",
              "weight": 13.499999999771756,
              "foodCategory": "bread, rolls and tortillas",
              "foodId": "food_ata1dxza443wfda7jb4e5b3zwt9p",
              "image": "https://www.edamam.com/food-img/349/349f852497885b9d9c0b195ad0d0db8f.jpg"
            },
            {
              "text": "Sprinkling of chopped parsley",
              "quantity": 0,
              "measure": null,
              "food": "parsley",
              "weight": 13.177453324996396,
              "foodCategory": "vegetables",
              "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
              "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            }
          ],
          "calories": 1270.3928711706164,
          "totalCO2Emissions": 11040.695820588631,
          "co2EmissionsClass": "G",
          "totalWeight": 1337.3292086705494,
          "totalTime": 0,
          "cuisineType": [
            "south american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1270.3928711706164,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 55.12690807850409,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 26.679709411336045,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.9309519999999999,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 19.52537793030629,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 2.977846207742748,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 126.8197741824572,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 16.448637854711045,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 26.66497395574796,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 68.12396200270827,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 238.35713875000002,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 3095.0343199794747,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 241.4992500710768,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 198.14162241583017,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 3187.999078872564,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 9.90391369702872,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 11.137563137169142,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 882.8084328529787,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 252.1330784982348,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 118.62737096974521,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.8966495082071313,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.839750557507524,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 23.36616093009041,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 3.1124928609671634,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 222.6141941035859,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 203.84919410390316,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 11.06999999981284,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 4.087142855999202,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.42599999999999993,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 1.786402567687211,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 230.94587937242545,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1071.1913627245156,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 63.519643558530824,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 84.8106278130832,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 133.39854705668023,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 42.27325806081906,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 65.79455141884418,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 136.24792400541654,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 79.45237958333334,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 128.9597633324781,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 24.14992500710768,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 47.17657676567385,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 67.82976763558646,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 55.021742761270666,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 101.25057397426494,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 126.11549040756839,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 28.014786499803865,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 131.80818996638357,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 74.72079235059428,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 64.596196731348,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 146.03850581306506,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 239.42252776670486,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 55.653548525896475,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 170.29761899996677,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 2.8399999999999994,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 11.909350451248075,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 192.4548994770212,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 55.12690807850409,
              "hasRDI": true,
              "daily": 84.8106278130832,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 26.679709411336045,
                  "hasRDI": true,
                  "daily": 133.39854705668023,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.9309519999999999,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 19.52537793030629,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 2.977846207742748,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 126.8197741824572,
              "hasRDI": true,
              "daily": 42.27325806081906,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 16.448637854711045,
                  "hasRDI": true,
                  "daily": 65.79455141884418,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 26.66497395574796,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 68.12396200270827,
              "hasRDI": true,
              "daily": 136.24792400541654,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 238.35713875000002,
              "hasRDI": true,
              "daily": 79.45237958333334,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 3095.0343199794747,
              "hasRDI": true,
              "daily": 128.9597633324781,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 241.4992500710768,
              "hasRDI": true,
              "daily": 24.14992500710768,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 198.14162241583017,
              "hasRDI": true,
              "daily": 47.17657676567385,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 3187.999078872564,
              "hasRDI": true,
              "daily": 67.82976763558646,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 9.90391369702872,
              "hasRDI": true,
              "daily": 55.021742761270666,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 11.137563137169142,
              "hasRDI": true,
              "daily": 101.25057397426494,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 882.8084328529787,
              "hasRDI": true,
              "daily": 126.11549040756839,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 252.1330784982348,
              "hasRDI": true,
              "daily": 28.014786499803865,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 118.62737096974521,
              "hasRDI": true,
              "daily": 131.80818996638357,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.8966495082071313,
              "hasRDI": true,
              "daily": 74.72079235059428,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.839750557507524,
              "hasRDI": true,
              "daily": 64.596196731348,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 23.36616093009041,
              "hasRDI": true,
              "daily": 146.03850581306506,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 3.1124928609671634,
              "hasRDI": true,
              "daily": 239.42252776670486,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 222.6141941035859,
              "hasRDI": true,
              "daily": 55.653548525896475,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 203.84919410390316,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 11.06999999981284,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 4.087142855999202,
              "hasRDI": true,
              "daily": 170.29761899996677,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.42599999999999993,
              "hasRDI": true,
              "daily": 2.8399999999999994,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 1.786402567687211,
              "hasRDI": true,
              "daily": 11.909350451248075,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 230.94587937242545,
              "hasRDI": true,
              "daily": 192.4548994770212,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1071.1913627245156,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/b6446a58a11de8fcd382254713e3f4b9?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_333e271a3dc26d367d4f6c1776cd0b13",
          "label": "Barbecued Beef Brisket",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/b64/b64005809d54d818e6ded326347b07c8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=80069aa3cb6f72845485a1daa5e56710cf248de47237ad208c16eadae20c1645",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b64/b64005809d54d818e6ded326347b07c8-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3ebacc6e7013b1440a11a7a5d0d486d018754b0e93995cd0e9dc77d9b4f2ff0d",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b64/b64005809d54d818e6ded326347b07c8-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=30f3136c3ad8bb346ce1bcd31d422fa5d93621953aad13d549e94298a48dd0a3",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b64/b64005809d54d818e6ded326347b07c8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=80069aa3cb6f72845485a1daa5e56710cf248de47237ad208c16eadae20c1645",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b64/b64005809d54d818e6ded326347b07c8-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c186f25496b6d311b24d8e02a9e88a0a35fb0e6ade3366de110135f57ba2e5cf",
              "width": 600,
              "height": 600
            }
          },
          "source": "Saveur",
          "url": "http://www.saveur.com/article/Recipes/Barbecued-Beef-Brisket",
          "shareAs": "http://www.edamam.com/recipe/barbecued-beef-brisket-333e271a3dc26d367d4f6c1776cd0b13/beef",
          "yield": 30,
          "dietLabels": [
            "Low-Carb",
            "Low-Sodium"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Keto-Friendly",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "No oil added",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "2 tbsp. chili powder",
            "1 tbsp. cayenne",
            "1 8-10-lb. beef brisket",
            "1 cup apple juice"
          ],
          "ingredients": [
            {
              "text": "2 tbsp. chili powder",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "chili powder",
              "weight": 16,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
              "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
            },
            {
              "text": "1 tbsp. cayenne",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "cayenne",
              "weight": 5.3,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a8iooz3aris8gba605l07brngnrx",
              "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
            },
            {
              "text": "1 8-10-lb. beef brisket",
              "quantity": 9,
              "measure": "pound",
              "food": "beef brisket",
              "weight": 4082.33133,
              "foodCategory": "meats",
              "foodId": "food_akcl1lrbxwowcrai1l6xkbtvxhsn",
              "image": "https://www.edamam.com/food-img/e0d/e0dd59302a5bf4ff2d2e4797cdfe4160.jpg"
            },
            {
              "text": "1 cup apple juice",
              "quantity": 1,
              "measure": "cup",
              "food": "apple juice",
              "weight": 248,
              "foodCategory": "fruit",
              "foodId": "food_ai7w4okaoeknd5b5j9o66bm6nu10",
              "image": "https://www.edamam.com/food-img/324/32497d8cd6291a6f03acc032e1da7676.jpg"
            }
          ],
          "calories": 11443.2884708,
          "totalCO2Emissions": 406395.02870840003,
          "co2EmissionsClass": "G",
          "totalWeight": 4351.63133,
          "totalTime": 0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 11443.2884708,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 910.2082983930001,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 366.5206171079,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 388.94492279630003,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 36.3169897385,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 38.97739,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 7.5056,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 25.556019999999997,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 728.4684073410001,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 3837.3914502000002,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2837.9821714,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 774.4803261000001,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 779.1156394,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 11732.3399043,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 64.71396995,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 173.551655259,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 6775.912381200001,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 347.573,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 6.3932,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 2.9670959310000002,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 5.3033578492,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 165.13827318719999,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 18.716727731800002,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 377.5078197,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 377.5078197,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 56.336172354,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 25.262214719,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 90.56753261,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 2643.4372612220004,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 572.16442354,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 1400.320459066154,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 1832.6030855395002,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 12.992463333333333,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 30.0224,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 1456.9368146820002,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1279.1304834,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 118.24925714166667,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 77.44803261000001,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 185.50372366666664,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 249.6242532829787,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 359.52205527777784,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 1577.7423205363636,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 967.9874830285715,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 38.61922222222222,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 7.103555555555556,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 247.25799425000002,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 407.9506037846154,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 1032.11420742,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1439.7482870615386,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 94.376954925,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 2347.3405147500002,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 168.41476479333332,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 75.47294384166666,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 910.2082983930001,
              "hasRDI": true,
              "daily": 1400.320459066154,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 366.5206171079,
                  "hasRDI": true,
                  "daily": 1832.6030855395002,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 388.94492279630003,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 36.3169897385,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 38.97739,
              "hasRDI": true,
              "daily": 12.992463333333333,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 7.5056,
                  "hasRDI": true,
                  "daily": 30.0224,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 25.556019999999997,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 728.4684073410001,
              "hasRDI": true,
              "daily": 1456.9368146820002,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 3837.3914502000002,
              "hasRDI": true,
              "daily": 1279.1304834,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 2837.9821714,
              "hasRDI": true,
              "daily": 118.24925714166667,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 774.4803261000001,
              "hasRDI": true,
              "daily": 77.44803261000001,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 779.1156394,
              "hasRDI": true,
              "daily": 185.50372366666664,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 11732.3399043,
              "hasRDI": true,
              "daily": 249.6242532829787,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 64.71396995,
              "hasRDI": true,
              "daily": 359.52205527777784,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 173.551655259,
              "hasRDI": true,
              "daily": 1577.7423205363636,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 6775.912381200001,
              "hasRDI": true,
              "daily": 967.9874830285715,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 347.573,
              "hasRDI": true,
              "daily": 38.61922222222222,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 6.3932,
              "hasRDI": true,
              "daily": 7.103555555555556,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 2.9670959310000002,
              "hasRDI": true,
              "daily": 247.25799425000002,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 5.3033578492,
              "hasRDI": true,
              "daily": 407.9506037846154,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 165.13827318719999,
              "hasRDI": true,
              "daily": 1032.11420742,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 18.716727731800002,
              "hasRDI": true,
              "daily": 1439.7482870615386,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 377.5078197,
              "hasRDI": true,
              "daily": 94.376954925,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 377.5078197,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 56.336172354,
              "hasRDI": true,
              "daily": 2347.3405147500002,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": true,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 25.262214719,
              "hasRDI": true,
              "daily": 168.41476479333332,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 90.56753261,
              "hasRDI": true,
              "daily": 75.47294384166666,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 2643.4372612220004,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/333e271a3dc26d367d4f6c1776cd0b13?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_89f0821227fd12abbbee648358661834",
          "label": "Beef Tenderloin",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/8eb/8eb5ba79991fbec8e35f46dd0613405b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f196da5ffde72afc6f4acac2eacd42030d9b1822b8f8e749506679184606db6f",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8eb/8eb5ba79991fbec8e35f46dd0613405b-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e3cf5b4e9b0febb909f36989c9da740ecef21a1413c5501ed11a6889502d85cb",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8eb/8eb5ba79991fbec8e35f46dd0613405b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c4313635fe1e70be6859f3d15ccdf5b0de860ca83b864b1912be43f737a14b22",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8eb/8eb5ba79991fbec8e35f46dd0613405b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f196da5ffde72afc6f4acac2eacd42030d9b1822b8f8e749506679184606db6f",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8eb/8eb5ba79991fbec8e35f46dd0613405b-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5868628e8cd90736d7b104e72e2797ac280fbe5ded2e85b499980a76eec7a76a",
              "width": 600,
              "height": 600
            }
          },
          "source": "Martha Stewart",
          "url": "http://www.marthastewart.com/344408/beef-tenderloin",
          "shareAs": "http://www.edamam.com/recipe/beef-tenderloin-89f0821227fd12abbbee648358661834/beef",
          "yield": 8,
          "dietLabels": [],
          "healthLabels": [
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "Immuno-Supportive"
          ],
          "cautions": [],
          "ingredientLines": [
            "2 1/2 pounds center-cut beef tenderloin, tied by your butcher",
            "1 tablespoon olive oil",
            "Coarse salt and ground pepper",
            "Horseradish Cream, optional",
            "Bearnaise Sauce, optional"
          ],
          "ingredients": [
            {
              "text": "2 1/2 pounds center-cut beef tenderloin, tied by your butcher",
              "quantity": 2.5,
              "measure": "pound",
              "food": "beef tenderloin",
              "weight": 1133.980925,
              "foodCategory": "meats",
              "foodId": "food_au8m3zia67rlqoavmsp0cbvzhwiq",
              "image": "https://www.edamam.com/food-img/f70/f70890fe73fc9e333aa584a88a61e351.jpg"
            },
            {
              "text": "1 tablespoon olive oil",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "olive oil",
              "weight": 13.5,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "Coarse salt and ground pepper",
              "quantity": 0,
              "measure": null,
              "food": "Coarse salt",
              "weight": 6.884885550000001,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Coarse salt and ground pepper",
              "quantity": 0,
              "measure": null,
              "food": "ground pepper",
              "weight": 3.4424427750000004,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "Horseradish Cream, optional",
              "quantity": 0,
              "measure": null,
              "food": "Horseradish",
              "weight": 0,
              "foodCategory": null,
              "foodId": "food_b1746ymbr3975lbxloaumbezzapp",
              "image": "https://www.edamam.com/food-img/cfb/cfbb3295c89c973ba65040aa2d137f29.png"
            },
            {
              "text": "Horseradish Cream, optional",
              "quantity": 0,
              "measure": null,
              "food": "Cream",
              "weight": 0,
              "foodCategory": "Dairy",
              "foodId": "food_bvhbvd7bwy6a7wamfrmvmbmen1sz",
              "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
            }
          ],
          "calories": 2917.57360686525,
          "totalCO2Emissions": 37859.64971653273,
          "co2EmissionsClass": "G",
          "totalWeight": 1156.363535797701,
          "totalTime": 0,
          "cuisineType": [
            "british"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2917.57360686525,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 216.368013024465,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 83.71738273292802,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 96.68141446085725,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 9.1660308688945,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 2.2014421546125007,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 0.8709380220750002,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 0.022031633760000006,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 225.11268913932253,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 963.88378625,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2676.4492732934073,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 300.18589306869825,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 232.737163825477,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 3482.282480671566,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 16.643740975427416,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 39.7357376120452,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2012.5852968345,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 0.9294595492500002,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.593387919197,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.958740373995,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 72.52340784691826,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 6.0654756479752505,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 125.32311702175001,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 125.32311702175001,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 12.473790175000001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 6.622373197359999,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 31.905973622675003,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 699.9926413383104,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 145.8786803432625,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 332.87386619148464,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 418.58691366464006,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 0.7338140515375002,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 3.4837520883000006,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 450.22537827864505,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 321.29459541666665,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 111.51871972055864,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 30.018589306869824,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 55.413610434637384,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 74.09111661003332,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 92.46522764126343,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 361.23397829132,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 287.51218526207145,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 0.10327328325000003,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 49.448993266416664,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 73.74925953807691,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 453.27129904323914,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 466.57504984425003,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 31.330779255437502,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 519.7412572916668,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 44.14915464906666,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 26.588311352229166,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 216.368013024465,
              "hasRDI": true,
              "daily": 332.87386619148464,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 83.71738273292802,
                  "hasRDI": true,
                  "daily": 418.58691366464006,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 96.68141446085725,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 9.1660308688945,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 2.2014421546125007,
              "hasRDI": true,
              "daily": 0.7338140515375002,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 0.8709380220750002,
                  "hasRDI": true,
                  "daily": 3.4837520883000006,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 0.022031633760000006,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 225.11268913932253,
              "hasRDI": true,
              "daily": 450.22537827864505,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 963.88378625,
              "hasRDI": true,
              "daily": 321.29459541666665,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 2676.4492732934073,
              "hasRDI": true,
              "daily": 111.51871972055864,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 300.18589306869825,
              "hasRDI": true,
              "daily": 30.018589306869824,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 232.737163825477,
              "hasRDI": true,
              "daily": 55.413610434637384,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 3482.282480671566,
              "hasRDI": true,
              "daily": 74.09111661003332,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 16.643740975427416,
              "hasRDI": true,
              "daily": 92.46522764126343,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 39.7357376120452,
              "hasRDI": true,
              "daily": 361.23397829132,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2012.5852968345,
              "hasRDI": true,
              "daily": 287.51218526207145,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 0.9294595492500002,
              "hasRDI": true,
              "daily": 0.10327328325000003,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": true,
              "daily": 0,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.593387919197,
              "hasRDI": true,
              "daily": 49.448993266416664,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.958740373995,
              "hasRDI": true,
              "daily": 73.74925953807691,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 72.52340784691826,
              "hasRDI": true,
              "daily": 453.27129904323914,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 6.0654756479752505,
              "hasRDI": true,
              "daily": 466.57504984425003,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 125.32311702175001,
              "hasRDI": true,
              "daily": 31.330779255437502,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 125.32311702175001,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 12.473790175000001,
              "hasRDI": true,
              "daily": 519.7412572916668,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": true,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 6.622373197359999,
              "hasRDI": true,
              "daily": 44.14915464906666,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 31.905973622675003,
              "hasRDI": true,
              "daily": 26.588311352229166,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 699.9926413383104,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/89f0821227fd12abbbee648358661834?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_14c68e61108cc0829ee6ef279f79b860",
          "label": "Portabello Beef Stew",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/72f/72fd32d089fdc211a0b35a7e41ed47e2.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8bda51b9ac074b227f44724afb5bb047f4398aff6f738266a96ac2f9ae9df68e",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/72f/72fd32d089fdc211a0b35a7e41ed47e2-s.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6d0a44d97763efb507ebfb474b88ee746b510c8f8599cff4f35b172c2ad9ef00",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/72f/72fd32d089fdc211a0b35a7e41ed47e2-m.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e9a38e2f9c3b5f6ce04f6c0246d95f983e2f0efade3e393f715e42bc0d28c633",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/72f/72fd32d089fdc211a0b35a7e41ed47e2.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8bda51b9ac074b227f44724afb5bb047f4398aff6f738266a96ac2f9ae9df68e",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/72f/72fd32d089fdc211a0b35a7e41ed47e2-l.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=504acc39186cfc5534c1ae7ba14e71417d5945264871afd60a64f83a00aa591d",
              "width": 600,
              "height": 600
            }
          },
          "source": "Food52",
          "url": "https://food52.com/recipes/14484-portabello-beef-stew",
          "shareAs": "http://www.edamam.com/recipe/portabello-beef-stew-14c68e61108cc0829ee6ef279f79b860/beef",
          "yield": 3,
          "dietLabels": [],
          "healthLabels": [
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Kosher"
          ],
          "cautions": [
            "Gluten",
            "Wheat",
            "Sulfites"
          ],
          "ingredientLines": [
            "1 pound beef stew meat",
            "2 tablespoons flour",
            "1 onion, sliced",
            "1 teaspoon dried thyme",
            "1/2 cup red wine",
            "15 ounces beef broth (1 can)",
            "2 carrots, sliced",
            "10 ounces baby portabello mushrooms"
          ],
          "ingredients": [
            {
              "text": "1 pound beef stew meat",
              "quantity": 1,
              "measure": "pound",
              "food": "beef stew meat",
              "weight": 453.59237,
              "foodCategory": "meats",
              "foodId": "food_bknby1la98smrsbwnthinbam42nj",
              "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
            },
            {
              "text": "2 tablespoons flour",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "flour",
              "weight": 15.624999999735829,
              "foodCategory": "grains",
              "foodId": "food_ahebfs0a985an4aubqaebbipra58",
              "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
            },
            {
              "text": "1 onion, sliced",
              "quantity": 1,
              "measure": "<unit>",
              "food": "onion",
              "weight": 125,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "1 teaspoon dried thyme",
              "quantity": 1,
              "measure": "teaspoon",
              "food": "dried thyme",
              "weight": 1,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
              "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
            },
            {
              "text": "1/2 cup red wine",
              "quantity": 0.5,
              "measure": "cup",
              "food": "red wine",
              "weight": 117.6,
              "foodCategory": "wines",
              "foodId": "food_b5q0xv2ba8la5hbzdfzdgaca3fwu",
              "image": "https://www.edamam.com/food-img/82b/82b8d0db2d5c38fc7498a657c0afc4ee.JPG"
            },
            {
              "text": "15 ounces beef broth (1 can)",
              "quantity": 1,
              "measure": "can",
              "food": "beef broth",
              "weight": 450.00000000000006,
              "foodCategory": "canned soup",
              "foodId": "food_a4blma9bmbzb9aa6dt0qmbzeb1o1",
              "image": "https://www.edamam.com/food-img/6f7/6f71425571cb38887c2287f9860d33bd.jpg"
            },
            {
              "text": "2 carrots, sliced",
              "quantity": 2,
              "measure": "<unit>",
              "food": "carrots",
              "weight": 122,
              "foodCategory": "vegetables",
              "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
              "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
            },
            {
              "text": "10 ounces baby portabello mushrooms",
              "quantity": 10,
              "measure": "ounce",
              "food": "portabello mushrooms",
              "weight": 283.49523125,
              "foodCategory": "vegetables",
              "foodId": "food_bikaydza0r1y3ja1c2nxxbqnynlg",
              "image": "https://www.edamam.com/food-img/245/2457f8850f43817dfeb967825467ef1e.jpg"
            }
          ],
          "calories": 943.1540318740385,
          "totalCO2Emissions": 90396.1596598499,
          "co2EmissionsClass": "G",
          "totalWeight": 1568.312601249736,
          "totalTime": 195,
          "cuisineType": [
            "south american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 943.1540318740385,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 24.445251306372416,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 9.831672204349593,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.1453207342500002,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 11.898491283249768,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 2.0232470175614092,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 50.69037379317341,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 10.018313006242867,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 18.958588281249288,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 113.56622074734773,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 285.7631931,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2152.599043112495,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 194.13361503746034,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 151.14389769994187,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 3713.9329318497175,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 13.712188249871911,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 26.882986942623152,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1473.8532926497148,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 1029.6718474,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 16.948,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.7069160824371831,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.3853568296248948,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 40.269731314271695,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 3.4387446038498837,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 156.8949358499313,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 156.8949358499313,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 10.753294414625001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.30407806375,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 1.7875403122498414,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 41.07016054999921,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1352.9072156302186,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 47.15770159370192,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 37.60807893288064,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 49.158361021747965,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 16.896791264391133,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 40.07325202497147,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 227.13244149469546,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 95.25439770000001,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 89.69162679635396,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 19.41336150374603,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 35.986642309509975,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 79.01984961382377,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 76.1788236103995,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 244.3907903874832,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 210.5504703785307,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 114.40798304444444,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 18.83111111111111,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 58.909673536431924,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 106.56590997114576,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 251.6858207141981,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 264.51881568076027,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 39.223733962482825,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 448.05393394270845,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 8.693853758333335,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 11.916935414998942,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 34.22513379166601,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 24.445251306372416,
              "hasRDI": true,
              "daily": 37.60807893288064,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 9.831672204349593,
                  "hasRDI": true,
                  "daily": 49.158361021747965,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.1453207342500002,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 11.898491283249768,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 2.0232470175614092,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 50.69037379317341,
              "hasRDI": true,
              "daily": 16.896791264391133,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 10.018313006242867,
                  "hasRDI": true,
                  "daily": 40.07325202497147,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 18.958588281249288,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 113.56622074734773,
              "hasRDI": true,
              "daily": 227.13244149469546,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 285.7631931,
              "hasRDI": true,
              "daily": 95.25439770000001,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 2152.599043112495,
              "hasRDI": true,
              "daily": 89.69162679635396,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 194.13361503746034,
              "hasRDI": true,
              "daily": 19.41336150374603,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 151.14389769994187,
              "hasRDI": true,
              "daily": 35.986642309509975,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 3713.9329318497175,
              "hasRDI": true,
              "daily": 79.01984961382377,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 13.712188249871911,
              "hasRDI": true,
              "daily": 76.1788236103995,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 26.882986942623152,
              "hasRDI": true,
              "daily": 244.3907903874832,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1473.8532926497148,
              "hasRDI": true,
              "daily": 210.5504703785307,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 1029.6718474,
              "hasRDI": true,
              "daily": 114.40798304444444,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 16.948,
              "hasRDI": true,
              "daily": 18.83111111111111,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.7069160824371831,
              "hasRDI": true,
              "daily": 58.909673536431924,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.3853568296248948,
              "hasRDI": true,
              "daily": 106.56590997114576,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 40.269731314271695,
              "hasRDI": true,
              "daily": 251.6858207141981,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 3.4387446038498837,
              "hasRDI": true,
              "daily": 264.51881568076027,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 156.8949358499313,
              "hasRDI": true,
              "daily": 39.223733962482825,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 156.8949358499313,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 10.753294414625001,
              "hasRDI": true,
              "daily": 448.05393394270845,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.30407806375,
              "hasRDI": true,
              "daily": 8.693853758333335,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 1.7875403122498414,
              "hasRDI": true,
              "daily": 11.916935414998942,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 41.07016054999921,
              "hasRDI": true,
              "daily": 34.22513379166601,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1352.9072156302186,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/14c68e61108cc0829ee6ef279f79b860?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d61fd8290e964a2d1bb159a34ea942ae",
          "label": "Pioneer Woman’s Beef Brisket",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c60/c60e420c3450c7eccd833271153f896e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=29260a8aca1243e42f10977c1cdbd1b3ed33a732c9c34c21ab188ba9a52d6e56",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c60/c60e420c3450c7eccd833271153f896e-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a5145dcd434ae21de5fee754f8d5e6b77a59ad3779c22f4c2a055ae5dff3b9c3",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c60/c60e420c3450c7eccd833271153f896e-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ad5c223a78c1adbbafccb81b16fe1fc0ec053b0a6458f26999c0de5a1d049720",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c60/c60e420c3450c7eccd833271153f896e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=29260a8aca1243e42f10977c1cdbd1b3ed33a732c9c34c21ab188ba9a52d6e56",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c60/c60e420c3450c7eccd833271153f896e-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0e35fd5a1c755fff579d27f139e59d688747a6217cd566490dd9b6e58fd5e075",
              "width": 600,
              "height": 600
            }
          },
          "source": "Pioneer Woman",
          "url": "http://thepioneerwoman.com/cooking/2007/06/brisket_baby/",
          "shareAs": "http://www.edamam.com/recipe/pioneer-woman-s-beef-brisket-d61fd8290e964a2d1bb159a34ea942ae/beef",
          "yield": 12,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Keto-Friendly",
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "No oil added",
            "Kosher"
          ],
          "cautions": [
            "Gluten",
            "Wheat",
            "Sulfites"
          ],
          "ingredientLines": [
            "2 cans Beef Consomme",
            "1/2 cup Lemon Juice",
            "1 1/2 cup Soy Sauce",
            "5 cloves Chopped Garlic",
            "2 tbsp Liquid Smoke",
            "10 pounds Beef Brisket"
          ],
          "ingredients": [
            {
              "text": "2 cans Beef Consomme",
              "quantity": 2,
              "measure": "can",
              "food": "Beef Consomme",
              "weight": 1172,
              "foodCategory": "canned soup",
              "foodId": "food_arlagstbtxcrk4ablvuh9b36no9m",
              "image": "https://www.edamam.com/food-img/6a5/6a5f7cf073a7e70af946bfb4d558a914.jpg"
            },
            {
              "text": "1/2 cup Lemon Juice",
              "quantity": 0.5,
              "measure": "cup",
              "food": "Lemon Juice",
              "weight": 122,
              "foodCategory": "100% juice",
              "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
              "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
            },
            {
              "text": "1 1/2 cup Soy Sauce",
              "quantity": 1.5,
              "measure": "cup",
              "food": "Soy Sauce",
              "weight": 382.5,
              "foodCategory": "plant-based protein",
              "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
              "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
            },
            {
              "text": "5 cloves Chopped Garlic",
              "quantity": 5,
              "measure": "clove",
              "food": "Garlic",
              "weight": 15,
              "foodCategory": "vegetables",
              "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
              "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
              "text": "2 tbsp Liquid Smoke",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "Liquid Smoke",
              "weight": 29.573529562,
              "foodCategory": "water",
              "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
              "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
              "text": "10 pounds Beef Brisket",
              "quantity": 10,
              "measure": "pound",
              "food": "Beef Brisket",
              "weight": 4535.9237,
              "foodCategory": "meats",
              "foodId": "food_akcl1lrbxwowcrai1l6xkbtvxhsn",
              "image": "https://www.edamam.com/food-img/e0d/e0dd59302a5bf4ff2d2e4797cdfe4160.jpg"
            }
          ],
          "calories": 12911.704412000001,
          "totalCO2Emissions": 569088.029676,
          "co2EmissionsClass": "G",
          "totalWeight": 6256.997229562,
          "totalTime": 0,
          "cuisineType": [
            "british"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 12911.704412,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 1009.9767037700001,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 406.89621623100004,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 431.757273107,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 39.397500265,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 40.78985,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 3.7410000000000005,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 4.7544,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 864.56854149,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 4263.7682780000005,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 26740.59368718248,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 979.5692348868599,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 1110.88200129562,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 14892.118226999999,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 76.5161055,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 197.19327986295622,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 8258.934868,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 0,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 56.58200000000001,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 3.4661315900000007,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 6.4311103880000005,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 192.784320208,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 21.154889702,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 498.35313300000007,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 498.35313300000007,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 62.595747059999994,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 19.69947191,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 77.36570289999999,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 4242.647829612439,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 645.5852206,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 1553.8103134923076,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 2034.4810811550003,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 13.596616666666668,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 14.964000000000004,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 1729.13708298,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1421.2560926666667,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1114.1914036326034,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 97.95692348868599,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 264.49571459419525,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 316.85357929787233,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 425.089475,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 1792.6661805723293,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1179.8478382857145,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 0,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 62.8688888888889,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 288.8442991666667,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 494.7007990769231,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 1204.9020013,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1627.2992078461539,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 124.58828325000002,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 2608.1561275,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 131.32981273333334,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 64.47141908333332,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 1009.9767037700001,
              "hasRDI": true,
              "daily": 1553.8103134923076,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 406.89621623100004,
                  "hasRDI": true,
                  "daily": 2034.4810811550003,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 431.757273107,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 39.397500265,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 40.78985,
              "hasRDI": true,
              "daily": 13.596616666666668,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 3.7410000000000005,
                  "hasRDI": true,
                  "daily": 14.964000000000004,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 4.7544,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 864.56854149,
              "hasRDI": true,
              "daily": 1729.13708298,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 4263.7682780000005,
              "hasRDI": true,
              "daily": 1421.2560926666667,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 26740.59368718248,
              "hasRDI": true,
              "daily": 1114.1914036326034,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 979.5692348868599,
              "hasRDI": true,
              "daily": 97.95692348868599,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 1110.88200129562,
              "hasRDI": true,
              "daily": 264.49571459419525,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 14892.118226999999,
              "hasRDI": true,
              "daily": 316.85357929787233,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 76.5161055,
              "hasRDI": true,
              "daily": 425.089475,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 197.19327986295622,
              "hasRDI": true,
              "daily": 1792.6661805723293,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 8258.934868,
              "hasRDI": true,
              "daily": 1179.8478382857145,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": true,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 56.58200000000001,
              "hasRDI": true,
              "daily": 62.8688888888889,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 3.4661315900000007,
              "hasRDI": true,
              "daily": 288.8442991666667,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 6.4311103880000005,
              "hasRDI": true,
              "daily": 494.7007990769231,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 192.784320208,
              "hasRDI": true,
              "daily": 1204.9020013,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 21.154889702,
              "hasRDI": true,
              "daily": 1627.2992078461539,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 498.35313300000007,
              "hasRDI": true,
              "daily": 124.58828325000002,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 498.35313300000007,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 62.595747059999994,
              "hasRDI": true,
              "daily": 2608.1561275,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": true,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 19.69947191,
              "hasRDI": true,
              "daily": 131.32981273333334,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 77.36570289999999,
              "hasRDI": true,
              "daily": 64.47141908333332,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 4242.647829612439,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/d61fd8290e964a2d1bb159a34ea942ae?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_31179b4e4a549bb44178dd4744970e50",
          "label": "Beef Paprikash",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/db0/db0dfe584255fb0a66e7dae4e3cb1119.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8aae4dd496725f8488f98557845a69364482f20fb6ae1f236ab7f7993beba71a",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/db0/db0dfe584255fb0a66e7dae4e3cb1119-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=894be5134fa775772e91327bb0388be889870cd1fac7e8e80533b9a8d36050e3",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/db0/db0dfe584255fb0a66e7dae4e3cb1119-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=92bb662874584ccefc50f1e3a169f04438c36841a51eeddf45bf580e1c3714ad",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/db0/db0dfe584255fb0a66e7dae4e3cb1119.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8aae4dd496725f8488f98557845a69364482f20fb6ae1f236ab7f7993beba71a",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/db0/db0dfe584255fb0a66e7dae4e3cb1119-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c24a6fed0f2d321c30ce2c34d6bdfc8dcb16e7bd38510c8bc958cedf3224ea6d",
              "width": 600,
              "height": 600
            }
          },
          "source": "BBC Good Food",
          "url": "http://www.bbcgoodfood.com/recipes/166629/",
          "shareAs": "http://www.edamam.com/recipe/beef-paprikash-31179b4e4a549bb44178dd4744970e50/beef",
          "yield": 4,
          "dietLabels": [],
          "healthLabels": [
            "Egg-Free",
            "Peanut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "olive oil",
            "250.0g chestnut mushrooms , halved if large",
            "1 large onion , halved and sliced",
            "300.0ml beef stock",
            "1 red pepper , sliced",
            "500.0g braising beef",
            "basmati rice , to serve",
            "a small bunch parsley , chopped",
            "2.0 tsp caraway seeds",
            "soured cream , to serve",
            "1.0 tbsp flour , seasoned really well",
            "2 garlic cloves , crushed",
            "1.0 tbsp paprika",
            "1 x 400g tin chopped tomatoes"
          ],
          "ingredients": [
            {
              "text": "olive oil",
              "quantity": 0,
              "measure": null,
              "food": "olive oil",
              "weight": 24.386686378703782,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "250.0g chestnut mushrooms , halved if large",
              "quantity": 250,
              "measure": "gram",
              "food": "mushrooms",
              "weight": 250,
              "foodCategory": "vegetables",
              "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
              "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
            },
            {
              "text": "1 large onion , halved and sliced",
              "quantity": 1,
              "measure": "<unit>",
              "food": "onion",
              "weight": 150,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "300.0ml beef stock",
              "quantity": 300,
              "measure": "milliliter",
              "food": "beef stock",
              "weight": 304.326204316587,
              "foodCategory": "canned soup",
              "foodId": "food_bxd832fblxgfaibgn0zk0b6dg6dh",
              "image": "https://www.edamam.com/food-img/428/4284513ddbf46e51f0f33566c0d61715.jpg"
            },
            {
              "text": "1 red pepper , sliced",
              "quantity": 1,
              "measure": "<unit>",
              "food": "red pepper",
              "weight": 119,
              "foodCategory": "vegetables",
              "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
              "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
            },
            {
              "text": "500.0g braising beef",
              "quantity": 500,
              "measure": "gram",
              "food": "beef",
              "weight": 500,
              "foodCategory": "meats",
              "foodId": "food_bknby1la98smrsbwnthinbam42nj",
              "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
            },
            {
              "text": "basmati rice , to serve",
              "quantity": 0,
              "measure": null,
              "food": "basmati rice",
              "weight": 0,
              "foodCategory": "grains",
              "foodId": "food_a3g7g0kb4xvknbbdl91t8a19a6ci",
              "image": "https://www.edamam.com/food-img/e35/e35ea1529983a3db51a32a1afa7b3837.jpg"
            },
            {
              "text": "a small bunch parsley , chopped",
              "quantity": 1,
              "measure": "bunch",
              "food": "parsley",
              "weight": 45,
              "foodCategory": "vegetables",
              "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
              "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            },
            {
              "text": "2.0 tsp caraway seeds",
              "quantity": 2,
              "measure": "teaspoon",
              "food": "caraway seeds",
              "weight": 4.2,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_ajud355b4ylptkamibaw8asro711",
              "image": "https://www.edamam.com/food-img/0fe/0fe42839f38dd9755609410f05d93c5d.jpg"
            },
            {
              "text": "soured cream , to serve",
              "quantity": 0,
              "measure": null,
              "food": "cream",
              "weight": 53.79416112949364,
              "foodCategory": "Dairy",
              "foodId": "food_bvhbvd7bwy6a7wamfrmvmbmen1sz",
              "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
            },
            {
              "text": "1.0 tbsp flour , seasoned really well",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "flour",
              "weight": 7.8124999998679145,
              "foodCategory": "grains",
              "foodId": "food_ahebfs0a985an4aubqaebbipra58",
              "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
            },
            {
              "text": "2 garlic cloves , crushed",
              "quantity": 2,
              "measure": "clove",
              "food": "garlic",
              "weight": 6,
              "foodCategory": "vegetables",
              "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
              "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
              "text": "1.0 tbsp paprika",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "paprika",
              "weight": 6.8,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
              "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
            },
            {
              "text": "1 x 400g tin chopped tomatoes",
              "quantity": 400,
              "measure": "gram",
              "food": "tomatoes",
              "weight": 400,
              "foodCategory": "canned vegetables",
              "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
              "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
            }
          ],
          "calories": 1393.36007004517,
          "totalCO2Emissions": 82834.62317419892,
          "co2EmissionsClass": "G",
          "totalWeight": 1871.3195518246523,
          "totalTime": 0,
          "cuisineType": [
            "central europe"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1393.36007004517,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 72.92278208050006,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 26.408238393026995,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.25,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 36.95986144991978,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 6.551876716765526,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 65.52941029721111,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 20.940137499996432,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 30.845812348822083,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 133.32809777817775,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 388.6980007474063,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1533.4696495036212,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 425.528042943265,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 270.50717558119663,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 4991.184340696453,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 20.883670693712826,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 31.154808617935114,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1659.0590032382854,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 855.6140022422188,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 281.70096496677695,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 3.2466233628728034,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.706143423170485,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 41.8802524744795,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 4.530401394267733,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 255.34154053147714,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 255.34154053147714,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 11.546829490033089,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.3765591279064555,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 11.726127723748206,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 784.6233620604397,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1583.07731770699,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 69.6680035022585,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 112.18889550846163,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 132.04119196513497,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 21.84313676573704,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 83.76054999998573,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 266.6561955563555,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 129.56600024913544,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 63.894568729317555,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 42.5528042943265,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 64.4064703764754,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 106.19541150417984,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 116.02039274284903,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 283.22553289031924,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 237.00842903404077,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 95.06822247135764,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 313.00107218530775,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 270.551946906067,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 208.16487870542193,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 261.75157796549684,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 348.4924149436717,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 63.835385132869284,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 481.11789541804535,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 9.177060852709703,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 78.17418482498805,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 653.8528017170331,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 72.92278208050006,
              "hasRDI": true,
              "daily": 112.18889550846163,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 26.408238393026995,
                  "hasRDI": true,
                  "daily": 132.04119196513497,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.25,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 36.95986144991978,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 6.551876716765526,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 65.52941029721111,
              "hasRDI": true,
              "daily": 21.84313676573704,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 20.940137499996432,
                  "hasRDI": true,
                  "daily": 83.76054999998573,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 30.845812348822083,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 133.32809777817775,
              "hasRDI": true,
              "daily": 266.6561955563555,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 388.6980007474063,
              "hasRDI": true,
              "daily": 129.56600024913544,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1533.4696495036212,
              "hasRDI": true,
              "daily": 63.894568729317555,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 425.528042943265,
              "hasRDI": true,
              "daily": 42.5528042943265,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 270.50717558119663,
              "hasRDI": true,
              "daily": 64.4064703764754,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 4991.184340696453,
              "hasRDI": true,
              "daily": 106.19541150417984,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 20.883670693712826,
              "hasRDI": true,
              "daily": 116.02039274284903,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 31.154808617935114,
              "hasRDI": true,
              "daily": 283.22553289031924,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1659.0590032382854,
              "hasRDI": true,
              "daily": 237.00842903404077,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 855.6140022422188,
              "hasRDI": true,
              "daily": 95.06822247135764,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 281.70096496677695,
              "hasRDI": true,
              "daily": 313.00107218530775,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 3.2466233628728034,
              "hasRDI": true,
              "daily": 270.551946906067,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.706143423170485,
              "hasRDI": true,
              "daily": 208.16487870542193,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 41.8802524744795,
              "hasRDI": true,
              "daily": 261.75157796549684,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 4.530401394267733,
              "hasRDI": true,
              "daily": 348.4924149436717,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 255.34154053147714,
              "hasRDI": true,
              "daily": 63.835385132869284,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 255.34154053147714,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 11.546829490033089,
              "hasRDI": true,
              "daily": 481.11789541804535,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.3765591279064555,
              "hasRDI": true,
              "daily": 9.177060852709703,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 11.726127723748206,
              "hasRDI": true,
              "daily": 78.17418482498805,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 784.6233620604397,
              "hasRDI": true,
              "daily": 653.8528017170331,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1583.07731770699,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/31179b4e4a549bb44178dd4744970e50?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_725bdf6630c28fb1e97c7a91b6bc2a35",
          "label": "Peppered Beef Stroganoff",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/172/172035e9d63d0413559977431f428848.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6f4b6c953f37e81ddbdf3ae00adecf44851d36e06cce98e3bbe25049521f236a",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/172/172035e9d63d0413559977431f428848-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f1c3d8909d3ee5d27ec5b53d4536194dd53dac45d6e847996df269cff0ac0afa",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/172/172035e9d63d0413559977431f428848-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=532ea7c8bb7e10ebdb5012c7feefa429efbe8d903bb570fc79234a91f543af89",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/172/172035e9d63d0413559977431f428848.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6f4b6c953f37e81ddbdf3ae00adecf44851d36e06cce98e3bbe25049521f236a",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/172/172035e9d63d0413559977431f428848-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=73fddd221faff0f128c605d4381b28183693941bdcb37006ac1dd57c310bd854",
              "width": 600,
              "height": 600
            }
          },
          "source": "Bon Appetit",
          "url": "http://www.bonappetit.com/recipes/quick-recipes/2008/01/peppered_beef_stroganoff",
          "shareAs": "http://www.edamam.com/recipe/peppered-beef-stroganoff-725bdf6630c28fb1e97c7a91b6bc2a35/beef",
          "yield": 4,
          "dietLabels": [],
          "healthLabels": [
            "Sugar-Conscious",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1 tablespoon coarsely ground peppercorn melange* or black pepper",
            "3 8-ounce beef tenderloin steaks",
            "3 tablespoons olive oil, divided",
            "8 ounces crimini (baby bella) mushrooms, halved or quartered if large",
            "1 1/4 cups beef broth",
            "1 tablespoon Cognac or brandy",
            "1/2 cup whipping cream",
            "1 tablespoon Dijon mustard",
            "1 8.8-ounce package wide egg noodles (such as De Cecco)",
            "1/4 cup chopped fresh Italian parsley"
          ],
          "ingredients": [
            {
              "text": "1 tablespoon coarsely ground peppercorn melange* or black pepper",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "black pepper",
              "weight": 6.9,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "3 8-ounce beef tenderloin steaks",
              "quantity": 24,
              "measure": "ounce",
              "food": "beef tenderloin steaks",
              "weight": 680.388555,
              "foodCategory": "meats",
              "foodId": "food_au8m3zia67rlqoavmsp0cbvzhwiq",
              "image": "https://www.edamam.com/food-img/f70/f70890fe73fc9e333aa584a88a61e351.jpg"
            },
            {
              "text": "3 tablespoons olive oil, divided",
              "quantity": 3,
              "measure": "tablespoon",
              "food": "olive oil",
              "weight": 40.5,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "8 ounces crimini (baby bella) mushrooms, halved or quartered if large",
              "quantity": 8,
              "measure": "ounce",
              "food": "mushrooms",
              "weight": 226.796185,
              "foodCategory": "vegetables",
              "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
              "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
            },
            {
              "text": "1 1/4 cups beef broth",
              "quantity": 1.25,
              "measure": "cup",
              "food": "beef broth",
              "weight": 300,
              "foodCategory": "canned soup",
              "foodId": "food_bxd832fblxgfaibgn0zk0b6dg6dh",
              "image": "https://www.edamam.com/food-img/428/4284513ddbf46e51f0f33566c0d61715.jpg"
            },
            {
              "text": "1 tablespoon Cognac or brandy",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "Cognac",
              "weight": 13.9999999996844,
              "foodCategory": "liquors and cocktails",
              "foodId": "food_ajguqpia53yz3oah6w2frad3tz65",
              "image": "https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg"
            },
            {
              "text": "1/2 cup whipping cream",
              "quantity": 0.5,
              "measure": "cup",
              "food": "whipping cream",
              "weight": 119.5,
              "foodCategory": "Dairy",
              "foodId": "food_blkhxayb2wggv1bqfzuuoazuqwg9",
              "image": "https://www.edamam.com/food-img/95c/95cc0b05cfb70cbdd2546504855f4bda.jpg"
            },
            {
              "text": "1 tablespoon Dijon mustard",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "Dijon mustard",
              "weight": 15.5624999997369,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a34cdj5b0kyuhfbov30xcb50u4dv",
              "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
            },
            {
              "text": "1 8.8-ounce package wide egg noodles (such as De Cecco)",
              "quantity": 8.800000190734863,
              "measure": "ounce",
              "food": "wide egg noodles",
              "weight": 249.47580890724242,
              "foodCategory": "grains",
              "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
              "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
            },
            {
              "text": "1/4 cup chopped fresh Italian parsley",
              "quantity": 0.25,
              "measure": "cup",
              "food": "parsley",
              "weight": 15,
              "foodCategory": "vegetables",
              "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
              "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            }
          ],
          "calories": 3441.7819368439245,
          "totalCO2Emissions": 56161.02033606366,
          "co2EmissionsClass": "G",
          "totalWeight": 1668.1230489066638,
          "totalTime": 0,
          "cuisineType": [
            "eastern europe"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 3441.7819368439245,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 208.42237986945284,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 79.62205283457389,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.1535808684333942,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 94.62382344620544,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 13.712350571333362,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 198.60150838917633,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 13.363863543928474,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 14.652744670453737,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 183.3887954107257,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 903.1850430795836,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1210.8881782926132,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 427.04601825486907,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 353.23700548607434,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 4199.718844033766,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 23.504426758581054,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 30.22502713526724,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2167.3050286456573,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 441.60701251421807,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 25.47640738499921,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 3.529871436910572,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.989816954258656,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 74.3215529535309,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 4.542085166828456,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 1070.0556782252784,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 219.3431698515819,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 501.4463759035572,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 8.312944201681004,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.9190197967217273,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 10.785280394690849,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 297.2276844181325,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1039.2122570067272,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 172.08909684219623,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 320.6498151837736,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 398.1102641728695,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 66.20050279639212,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 53.455454175713896,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 366.7775908214514,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 301.0616810265279,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 50.45367409552556,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 42.704601825486904,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 84.1040489252558,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 89.35572008582481,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 130.58014865878363,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 274.7729739569749,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 309.61500409223675,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 49.06744583491312,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 28.30711931666579,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 294.15595307588103,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 229.98591955835815,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 464.5097059595681,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 349.39116667911196,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 267.5139195563196,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 346.37267507004185,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 12.793465311478181,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 71.90186929793899,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 247.68973701511044,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 208.42237986945284,
              "hasRDI": true,
              "daily": 320.6498151837736,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 79.62205283457389,
                  "hasRDI": true,
                  "daily": 398.1102641728695,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.1535808684333942,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 94.62382344620544,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 13.712350571333362,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 198.60150838917633,
              "hasRDI": true,
              "daily": 66.20050279639212,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 13.363863543928474,
                  "hasRDI": true,
                  "daily": 53.455454175713896,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 14.652744670453737,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 183.3887954107257,
              "hasRDI": true,
              "daily": 366.7775908214514,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 903.1850430795836,
              "hasRDI": true,
              "daily": 301.0616810265279,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1210.8881782926132,
              "hasRDI": true,
              "daily": 50.45367409552556,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 427.04601825486907,
              "hasRDI": true,
              "daily": 42.704601825486904,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 353.23700548607434,
              "hasRDI": true,
              "daily": 84.1040489252558,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 4199.718844033766,
              "hasRDI": true,
              "daily": 89.35572008582481,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 23.504426758581054,
              "hasRDI": true,
              "daily": 130.58014865878363,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 30.22502713526724,
              "hasRDI": true,
              "daily": 274.7729739569749,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2167.3050286456573,
              "hasRDI": true,
              "daily": 309.61500409223675,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 441.60701251421807,
              "hasRDI": true,
              "daily": 49.06744583491312,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 25.47640738499921,
              "hasRDI": true,
              "daily": 28.30711931666579,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 3.529871436910572,
              "hasRDI": true,
              "daily": 294.15595307588103,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.989816954258656,
              "hasRDI": true,
              "daily": 229.98591955835815,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 74.3215529535309,
              "hasRDI": true,
              "daily": 464.5097059595681,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 4.542085166828456,
              "hasRDI": true,
              "daily": 349.39116667911196,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 1070.0556782252784,
              "hasRDI": true,
              "daily": 267.5139195563196,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 219.3431698515819,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 501.4463759035572,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 8.312944201681004,
              "hasRDI": true,
              "daily": 346.37267507004185,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.9190197967217273,
              "hasRDI": true,
              "daily": 12.793465311478181,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 10.785280394690849,
              "hasRDI": true,
              "daily": 71.90186929793899,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 297.2276844181325,
              "hasRDI": true,
              "daily": 247.68973701511044,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1039.2122570067272,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/725bdf6630c28fb1e97c7a91b6bc2a35?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d539948bdf715702442c2af44fb6b54a",
          "label": "Beer Beef Stew Recipe",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/a7e/a7eb9fb4c1df62072612ad36cad692a0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3e5613032ac24ed6acbf485aaaa3590ee0310fadf47c8347dc033b2bac388b39",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a7e/a7eb9fb4c1df62072612ad36cad692a0-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=67131b3dd3831e66c7ce89a3cbe289decf94fbf45af7e641be49b4a9068fe82f",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a7e/a7eb9fb4c1df62072612ad36cad692a0-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=847474462c7d9ee12bf68d9a0f534be479be06c7d291302777debc3dda2577a1",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a7e/a7eb9fb4c1df62072612ad36cad692a0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3e5613032ac24ed6acbf485aaaa3590ee0310fadf47c8347dc033b2bac388b39",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a7e/a7eb9fb4c1df62072612ad36cad692a0-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=acea5e59bd0b2df9f728313f7be89daf42a460faee20456e131e06884e27cc3a",
              "width": 600,
              "height": 600
            }
          },
          "source": "Food Republic",
          "url": "http://www.foodrepublic.com/2011/07/21/beer-beef-stew-recipe",
          "shareAs": "http://www.edamam.com/recipe/beer-beef-stew-recipe-d539948bdf715702442c2af44fb6b54a/beef",
          "yield": 2,
          "dietLabels": [],
          "healthLabels": [
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1 pound beef chuck, cut into 1-inch chunks",
            "2 tablespoons olive oil",
            "2 sweet onions, halved and sliced",
            "3 cloves garlic, minced",
            "1 1/2 teaspoons dark brown sugar",
            "3 sprigs fresh thyme (or 1/2 teaspoon dried)",
            "1 bay leaf",
            "1 cup beef broth",
            "1 cup dark beer (preferably Belgian ale)",
            "1 tablespoon whole-grain mustard"
          ],
          "ingredients": [
            {
              "text": "1 pound beef chuck, cut into 1-inch chunks",
              "quantity": 1,
              "measure": "pound",
              "food": "beef chuck",
              "weight": 453.59237,
              "foodCategory": "meats",
              "foodId": "food_bknby1la98smrsbwnthinbam42nj",
              "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
            },
            {
              "text": "2 tablespoons olive oil",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "olive oil",
              "weight": 27,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "2 sweet onions, halved and sliced",
              "quantity": 2,
              "measure": "<unit>",
              "food": "sweet onions",
              "weight": 662,
              "foodCategory": "vegetables",
              "foodId": "food_a76jqx4bnd9n8ca5tojgab31dyur",
              "image": "https://www.edamam.com/food-img/a7f/a7fd8e3b26066b4c96d5b5804e7f0976.jpg"
            },
            {
              "text": "3 cloves garlic, minced",
              "quantity": 3,
              "measure": "clove",
              "food": "garlic",
              "weight": 9,
              "foodCategory": "vegetables",
              "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
              "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
              "text": "1 1/2 teaspoons dark brown sugar",
              "quantity": 1.5,
              "measure": "teaspoon",
              "food": "dark brown sugar",
              "weight": 4.5,
              "foodCategory": "sugars",
              "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
              "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
            },
            {
              "text": "3 sprigs fresh thyme (or 1/2 teaspoon dried)",
              "quantity": 3,
              "measure": "sprig",
              "food": "fresh thyme",
              "weight": 9,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
              "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
            },
            {
              "text": "1 bay leaf",
              "quantity": 1,
              "measure": "<unit>",
              "food": "bay leaf",
              "weight": 0.6,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_asx39x4ayja4jab6ivj6zayvkblo",
              "image": "https://www.edamam.com/food-img/0f9/0f9f5f95df173e9ffaaff2977bef88f3.jpg"
            },
            {
              "text": "1 cup beef broth",
              "quantity": 1,
              "measure": "cup",
              "food": "beef broth",
              "weight": 240,
              "foodCategory": "canned soup",
              "foodId": "food_bxd832fblxgfaibgn0zk0b6dg6dh",
              "image": "https://www.edamam.com/food-img/428/4284513ddbf46e51f0f33566c0d61715.jpg"
            },
            {
              "text": "1 cup dark beer (preferably Belgian ale)",
              "quantity": 1,
              "measure": "cup",
              "food": "beer",
              "weight": 237.6,
              "foodCategory": "beer",
              "foodId": "food_b3ieo81b7uf59ya5529oobsaaqbu",
              "image": "https://www.edamam.com/food-img/7f8/7f82e3944cd8fcba3ffad7b6ce741c62.jpg"
            },
            {
              "text": "1 tablespoon whole-grain mustard",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "mustard",
              "weight": 15.5624999997369,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a34cdj5b0kyuhfbov30xcb50u4dv",
              "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
            }
          ],
          "calories": 1224.3735809998418,
          "totalCO2Emissions": 69802.54235869528,
          "co2EmissionsClass": "G",
          "totalWeight": 1658.8548699997368,
          "totalTime": 0,
          "cuisineType": [
            "french"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1224.3735809998418,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 50.329540496991214,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 12.92660006559944,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.1353815499999764,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 31.545532236994262,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 4.463830096997964,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 72.78717459398466,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 8.187299999989476,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 39.127474999997574,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 4.3659,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 110.98024636799018,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 285.7631931,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1072.0899722970953,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 291.62438309983423,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 211.13539769987375,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 3111.8155400996006,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 14.312006782995764,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 26.22215721699832,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1311.6749428997161,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 33.12397239998684,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 49.318687499999214,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.7752935209995343,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.2470167789998161,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 26.69127524689851,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 3.8439494115998163,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 39.198146099981585,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 191.4581460999816,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 10.344066799000002,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.4535923700000001,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 4.910591265999053,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 25.654760549996315,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1404.9337269837797,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 61.21867904999209,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 77.43006230306341,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 64.6330003279972,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 24.26239153132822,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 32.7491999999579,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 221.96049273598038,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 95.25439770000001,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 44.670415512378966,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 29.162438309983422,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 50.270332785684225,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 66.20884127871491,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 79.5111487944209,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 238.38324742725746,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 187.38213469995947,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 3.6804413777763156,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 54.79854166666579,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 64.60779341662786,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 95.92436761537046,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 166.82047029311568,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 295.6884162769089,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 9.799536524995396,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 431.0027832916668,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.0239491333333337,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 32.737275106660356,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 21.378967124996926,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 50.329540496991214,
              "hasRDI": true,
              "daily": 77.43006230306341,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 12.92660006559944,
                  "hasRDI": true,
                  "daily": 64.6330003279972,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.1353815499999764,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 31.545532236994262,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 4.463830096997964,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 72.78717459398466,
              "hasRDI": true,
              "daily": 24.26239153132822,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 8.187299999989476,
                  "hasRDI": true,
                  "daily": 32.7491999999579,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 39.127474999997574,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 4.3659,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 110.98024636799018,
              "hasRDI": true,
              "daily": 221.96049273598038,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 285.7631931,
              "hasRDI": true,
              "daily": 95.25439770000001,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1072.0899722970953,
              "hasRDI": true,
              "daily": 44.670415512378966,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 291.62438309983423,
              "hasRDI": true,
              "daily": 29.162438309983422,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 211.13539769987375,
              "hasRDI": true,
              "daily": 50.270332785684225,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 3111.8155400996006,
              "hasRDI": true,
              "daily": 66.20884127871491,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 14.312006782995764,
              "hasRDI": true,
              "daily": 79.5111487944209,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 26.22215721699832,
              "hasRDI": true,
              "daily": 238.38324742725746,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1311.6749428997161,
              "hasRDI": true,
              "daily": 187.38213469995947,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 33.12397239998684,
              "hasRDI": true,
              "daily": 3.6804413777763156,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 49.318687499999214,
              "hasRDI": true,
              "daily": 54.79854166666579,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.7752935209995343,
              "hasRDI": true,
              "daily": 64.60779341662786,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.2470167789998161,
              "hasRDI": true,
              "daily": 95.92436761537046,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 26.69127524689851,
              "hasRDI": true,
              "daily": 166.82047029311568,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 3.8439494115998163,
              "hasRDI": true,
              "daily": 295.6884162769089,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 39.198146099981585,
              "hasRDI": true,
              "daily": 9.799536524995396,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 191.4581460999816,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 10.344066799000002,
              "hasRDI": true,
              "daily": 431.0027832916668,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.4535923700000001,
              "hasRDI": true,
              "daily": 3.0239491333333337,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 4.910591265999053,
              "hasRDI": true,
              "daily": 32.737275106660356,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 25.654760549996315,
              "hasRDI": true,
              "daily": 21.378967124996926,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1404.9337269837797,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/d539948bdf715702442c2af44fb6b54a?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_cdccdf512c73703a2fa3236044e29ff0",
          "label": "Beef Jerky",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/346/3464d06a3fa4f31b0d898b714dbfd5c4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f93b030642c46f8a66e726e4b071d06efda1e513c80e8dc7d5dee71a50a931b2",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/346/3464d06a3fa4f31b0d898b714dbfd5c4-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7ebc2e94917527118df6f0458508296fd8eb1a336948c45f69fce231a5c928c7",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/346/3464d06a3fa4f31b0d898b714dbfd5c4-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=257a122b3696efd5240138258b4bfac3fe7bce7886325e7f8d2a68dcdae2f078",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/346/3464d06a3fa4f31b0d898b714dbfd5c4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f93b030642c46f8a66e726e4b071d06efda1e513c80e8dc7d5dee71a50a931b2",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/346/3464d06a3fa4f31b0d898b714dbfd5c4-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=37c0810d1836bbfbb53a6c5b5f463b69c9d5f0676caee0d1745a4552a043ce43",
              "width": 600,
              "height": 600
            }
          },
          "source": "The Daily Meal",
          "url": "https://www.thedailymeal.com/recipes/beef-jerky",
          "shareAs": "http://www.edamam.com/recipe/beef-jerky-cdccdf512c73703a2fa3236044e29ff0/beef",
          "yield": 4,
          "dietLabels": [
            "High-Protein",
            "Low-Carb",
            "Low-Sodium"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Paleo",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "No oil added",
            "Sulfite-Free",
            "FODMAP-Free",
            "Kosher",
            "Immuno-Supportive"
          ],
          "cautions": [],
          "ingredientLines": [
            "1 Pound beef",
            "1 Cup seasoning"
          ],
          "ingredients": [
            {
              "text": "1 Pound beef",
              "quantity": 1,
              "measure": "pound",
              "food": "beef",
              "weight": 453.59237,
              "foodCategory": "meats",
              "foodId": "food_bknby1la98smrsbwnthinbam42nj",
              "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
            },
            {
              "text": "1 Cup seasoning",
              "quantity": 1,
              "measure": "cup",
              "food": "seasoning",
              "weight": 70.40000000119026,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
              "image": "https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg"
            }
          ],
          "calories": 805.7980810036543,
          "totalCO2Emissions": 45160.68096760064,
          "co2EmissionsClass": "G",
          "totalWeight": 523.9923700011902,
          "totalTime": 0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "starter"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 805.7980810036543,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 27.11891299708963,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 11.33357631563916,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.1339809250000001,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 12.234192487014354,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 2.769080347023044,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 46.7196708447807,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 7.955200000134501,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 1.2672000000214247,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 104.90874886811416,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 285.7631931,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 377.3459723003214,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 760.151008111855,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 252.95039770266624,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2173.4355401081416,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 34.33128053342016,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 26.74990721703738,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1104.6794429020356,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 101.99984740157115,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 8.448000000142832,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.5487298960031424,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.9055710290022736,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 24.25793912193535,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 3.505684661615712,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 110.75977110164257,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 110.75977110164257,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 10.296546799000001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.4535923700000001,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 1.7457462660157117,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 573.8054855595864,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 334.59224198411084,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 40.28990405018271,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 41.72140461090712,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 56.6678815781958,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 15.573223614926901,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 31.820800000538,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 209.81749773622832,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 95.25439770000001,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 15.722748845846727,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 76.0151008111855,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 60.226285167301484,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 46.24330936400302,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 190.72933629677868,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 243.18097470033982,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 157.8113489860051,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 11.33331637795235,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 9.38666666682537,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 45.7274913335952,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 69.65930992325181,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 151.61211951209594,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 269.6680508935163,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 27.689942775410643,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 429.02278329166677,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.0239491333333337,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 11.638308440104744,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 478.171237966322,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 27.11891299708963,
              "hasRDI": true,
              "daily": 41.72140461090712,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 11.33357631563916,
                  "hasRDI": true,
                  "daily": 56.6678815781958,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.1339809250000001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 12.234192487014354,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 2.769080347023044,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 46.7196708447807,
              "hasRDI": true,
              "daily": 15.573223614926901,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 7.955200000134501,
                  "hasRDI": true,
                  "daily": 31.820800000538,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 1.2672000000214247,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 104.90874886811416,
              "hasRDI": true,
              "daily": 209.81749773622832,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 285.7631931,
              "hasRDI": true,
              "daily": 95.25439770000001,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 377.3459723003214,
              "hasRDI": true,
              "daily": 15.722748845846727,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 760.151008111855,
              "hasRDI": true,
              "daily": 76.0151008111855,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 252.95039770266624,
              "hasRDI": true,
              "daily": 60.226285167301484,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2173.4355401081416,
              "hasRDI": true,
              "daily": 46.24330936400302,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 34.33128053342016,
              "hasRDI": true,
              "daily": 190.72933629677868,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 26.74990721703738,
              "hasRDI": true,
              "daily": 243.18097470033982,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1104.6794429020356,
              "hasRDI": true,
              "daily": 157.8113489860051,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 101.99984740157115,
              "hasRDI": true,
              "daily": 11.33331637795235,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 8.448000000142832,
              "hasRDI": true,
              "daily": 9.38666666682537,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.5487298960031424,
              "hasRDI": true,
              "daily": 45.7274913335952,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.9055710290022736,
              "hasRDI": true,
              "daily": 69.65930992325181,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 24.25793912193535,
              "hasRDI": true,
              "daily": 151.61211951209594,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 3.505684661615712,
              "hasRDI": true,
              "daily": 269.6680508935163,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 110.75977110164257,
              "hasRDI": true,
              "daily": 27.689942775410643,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 110.75977110164257,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 10.296546799000001,
              "hasRDI": true,
              "daily": 429.02278329166677,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.4535923700000001,
              "hasRDI": true,
              "daily": 3.0239491333333337,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 1.7457462660157117,
              "hasRDI": true,
              "daily": 11.638308440104744,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 573.8054855595864,
              "hasRDI": true,
              "daily": 478.171237966322,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 334.59224198411084,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/cdccdf512c73703a2fa3236044e29ff0?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d36094487933c7d2c124c6d3742e49f6",
          "label": "Quick Beef Stroganoff",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/552/5524f65e427c421bb0127a322da13570.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d4f5d49f3c00fec36b2aea95e38c0dc9a173af4681efafaa1ac24912fbbf10d1",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/552/5524f65e427c421bb0127a322da13570-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4e0ca45895640b782684e88ddb9d3943318453ab7a6ad32969c40158076a7f36",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/552/5524f65e427c421bb0127a322da13570-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ae2eb0df8654956fecc2c3c40d492ca2138f899b20b4366c59197e061b0379ce",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/552/5524f65e427c421bb0127a322da13570.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d4f5d49f3c00fec36b2aea95e38c0dc9a173af4681efafaa1ac24912fbbf10d1",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/552/5524f65e427c421bb0127a322da13570-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b3fe6da883184f7b724f4c5031deb3ad959b54e3f6b4f8f46cb0e46cce5d4a96",
              "width": 600,
              "height": 600
            }
          },
          "source": "Food & Wine",
          "url": "http://www.foodandwine.com/recipes/quick-beef-stroganoff",
          "shareAs": "http://www.edamam.com/recipe/quick-beef-stroganoff-d36094487933c7d2c124c6d3742e49f6/beef",
          "yield": 8,
          "dietLabels": [
            "Balanced"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "2 tablespoons extra-virgin olive oil",
            "1 onion, thinly sliced",
            "8 ounces cremini mushrooms, thinly sliced",
            "1 teaspoon chopped thyme",
            "Kosher salt and freshly ground pepper",
            "Coriander-Dusted Roast Beef",
            "1/4 cup sour cream",
            "Half of the Coriander-Dusted Roast Beef or 12 ounces roast beef, sliced 1/4 inch thick and cut into strips",
            "Buttered noodles, for serving"
          ],
          "ingredients": [
            {
              "text": "2 tablespoons extra-virgin olive oil",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "extra-virgin olive oil",
              "weight": 27,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "1 onion, thinly sliced",
              "quantity": 1,
              "measure": "<unit>",
              "food": "onion",
              "weight": 125,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "8 ounces cremini mushrooms, thinly sliced",
              "quantity": 8,
              "measure": "ounce",
              "food": "cremini mushrooms",
              "weight": 226.796185,
              "foodCategory": "vegetables",
              "foodId": "food_bizlqkfby3d954bfyuxhsbhybslp",
              "image": "https://www.edamam.com/food-img/17a/17a9ef54308a434004be9ba16c0eea03.jpg"
            },
            {
              "text": "1 teaspoon chopped thyme",
              "quantity": 1,
              "measure": "teaspoon",
              "food": "thyme",
              "weight": 0.8,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
              "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
            },
            {
              "text": "Kosher salt and freshly ground pepper",
              "quantity": 0,
              "measure": null,
              "food": "Kosher salt",
              "weight": 4.842577110000001,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Kosher salt and freshly ground pepper",
              "quantity": 0,
              "measure": null,
              "food": "pepper",
              "weight": 2.4212885550000003,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "Coriander-Dusted Roast Beef",
              "quantity": 0,
              "measure": null,
              "food": "Coriander",
              "weight": 4.035480925000001,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_afpcy6rb44nx6gbfff63ga2cqksw",
              "image": "https://www.edamam.com/food-img/a90/a901cee0b9028841d258f5d07b5924e7.jpg"
            },
            {
              "text": "1/4 cup sour cream",
              "quantity": 0.25,
              "measure": "cup",
              "food": "sour cream",
              "weight": 57.5,
              "foodCategory": "Dairy",
              "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
              "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
            },
            {
              "text": "Half of the Coriander-Dusted Roast Beef or 12 ounces roast beef, sliced 1/4 inch thick and cut into strips",
              "quantity": 0.5,
              "measure": "<unit>",
              "food": "roast beef",
              "weight": 170,
              "foodCategory": "meats",
              "foodId": "food_a94xddzbba3iwnax9cx3nan3xvea",
              "image": "https://www.edamam.com/food-img/634/634aa9adfb65afb5fef3df13d7334985.jpg"
            },
            {
              "text": "Buttered noodles, for serving",
              "quantity": 1,
              "measure": "serving",
              "food": "noodles",
              "weight": 200,
              "foodCategory": "grains",
              "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
              "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
            }
          ],
          "calories": 1573.06132812955,
          "totalCO2Emissions": 7706.612254997596,
          "co2EmissionsClass": "E",
          "totalWeight": 817.9692289973884,
          "totalTime": 0,
          "cuisineType": [
            "eastern europe"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1573.06132812955,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 69.0410251522655,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 20.9991280637431,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.122,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 34.63161555573645,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 6.990555773666401,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 169.58636094658,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 12.50122962199,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 14.632390628752002,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 72.557395496287,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 325.4,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1891.9011245841507,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 273.9310872410732,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 210.84330987672388,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2398.7256789770913,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 13.614506051557882,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 13.463135246796888,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1212.60917490015,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 137.75774790985002,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 11.89575099425,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 2.70660016680015,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.3588805205814998,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 36.42795310188615,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1.91278075319505,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 843.94566530435,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 161.94566530435003,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 402,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 3.959796185,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.056796185,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 5.552361019472,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 25.132649364535002,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 495.0795943349427,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 78.6530664064775,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 106.21696177271616,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 104.9956403187155,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 56.52878698219333,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 50.00491848796,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 145.114790992574,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 108.46666666666665,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 78.82921352433961,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 27.39310872410732,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 50.200788065886634,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 51.03671657398067,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 75.63614473087712,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 122.39213860724443,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 173.22988212859286,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 15.30641643442778,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 13.217501104722222,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 225.55001390001252,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 181.45234773703845,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 227.67470688678847,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 147.13698101500384,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 210.9864163260875,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 164.99150770833336,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 7.0453079,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 37.01574012981334,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 20.943874470445834,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 69.0410251522655,
              "hasRDI": true,
              "daily": 106.21696177271616,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 20.9991280637431,
                  "hasRDI": true,
                  "daily": 104.9956403187155,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.122,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 34.63161555573645,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 6.990555773666401,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 169.58636094658,
              "hasRDI": true,
              "daily": 56.52878698219333,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 12.50122962199,
                  "hasRDI": true,
                  "daily": 50.00491848796,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 14.632390628752002,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 72.557395496287,
              "hasRDI": true,
              "daily": 145.114790992574,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 325.4,
              "hasRDI": true,
              "daily": 108.46666666666665,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1891.9011245841507,
              "hasRDI": true,
              "daily": 78.82921352433961,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 273.9310872410732,
              "hasRDI": true,
              "daily": 27.39310872410732,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 210.84330987672388,
              "hasRDI": true,
              "daily": 50.200788065886634,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2398.7256789770913,
              "hasRDI": true,
              "daily": 51.03671657398067,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 13.614506051557882,
              "hasRDI": true,
              "daily": 75.63614473087712,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 13.463135246796888,
              "hasRDI": true,
              "daily": 122.39213860724443,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1212.60917490015,
              "hasRDI": true,
              "daily": 173.22988212859286,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 137.75774790985002,
              "hasRDI": true,
              "daily": 15.30641643442778,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 11.89575099425,
              "hasRDI": true,
              "daily": 13.217501104722222,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 2.70660016680015,
              "hasRDI": true,
              "daily": 225.55001390001252,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.3588805205814998,
              "hasRDI": true,
              "daily": 181.45234773703845,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 36.42795310188615,
              "hasRDI": true,
              "daily": 227.67470688678847,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 1.91278075319505,
              "hasRDI": true,
              "daily": 147.13698101500384,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 843.94566530435,
              "hasRDI": true,
              "daily": 210.9864163260875,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 161.94566530435003,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 402,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 3.959796185,
              "hasRDI": true,
              "daily": 164.99150770833336,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.056796185,
              "hasRDI": true,
              "daily": 7.0453079,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 5.552361019472,
              "hasRDI": true,
              "daily": 37.01574012981334,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 25.132649364535002,
              "hasRDI": true,
              "daily": 20.943874470445834,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 495.0795943349427,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/d36094487933c7d2c124c6d3742e49f6?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5933268e7179c7f6686aaad9903a41ae",
          "label": "Basque Beef Tenderloin",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/40a/40a7134790c58935012e0bdc40ade70f.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=65bef4a5793fefa4870cc8a6f29c62f3048f07f0a132fe4ab95115f284631731",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/40a/40a7134790c58935012e0bdc40ade70f-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=efc8174ff90bfb77a5312002b47e22d8c774211a89cca839e19af75f04b56b78",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/40a/40a7134790c58935012e0bdc40ade70f-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8bf0f380d98071b12c224c7ee004ae25fc770be672bea33b9b5ea8d605646476",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/40a/40a7134790c58935012e0bdc40ade70f.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=65bef4a5793fefa4870cc8a6f29c62f3048f07f0a132fe4ab95115f284631731",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/40a/40a7134790c58935012e0bdc40ade70f-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=12032785ec5a0ba4b2996c1245641d207e6640ff2b5f31e572661ee61379b463",
              "width": 600,
              "height": 600
            }
          },
          "source": "Cat Cora",
          "url": "http://www.catcora.com/recipes/main-dishes/basque-beef-tenderloin/",
          "shareAs": "http://www.edamam.com/recipe/basque-beef-tenderloin-5933268e7179c7f6686aaad9903a41ae/beef",
          "yield": 6,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Keto-Friendly",
            "Paleo",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1 Whole Beef Tenderloin (3 ½ to 5 Pounds)",
            "1 Tablespoon Dried Orange Peel",
            "1½ Teaspoon Chili Powder",
            "1 Teaspoon Sea Salt",
            "1 Tablespoon Olive Oil"
          ],
          "ingredients": [
            {
              "text": "1 Whole Beef Tenderloin (3 ½ to 5 Pounds)",
              "quantity": 4.25,
              "measure": "pound",
              "food": "Beef Tenderloin",
              "weight": 1927.7675725000001,
              "foodCategory": "meats",
              "foodId": "food_au8m3zia67rlqoavmsp0cbvzhwiq",
              "image": "https://www.edamam.com/food-img/f70/f70890fe73fc9e333aa584a88a61e351.jpg"
            },
            {
              "text": "1 Tablespoon Dried Orange Peel",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "Orange Peel",
              "weight": 6,
              "foodCategory": "fruit",
              "foodId": "food_b4g0yyrb23ih2rajszgs8bjpe2nn",
              "image": "https://www.edamam.com/food-img/cd4/cd456545c89e1e4c319f3cf1b5bff9e6.jpg"
            },
            {
              "text": "1½ Teaspoon Chili Powder",
              "quantity": 1.5,
              "measure": "teaspoon",
              "food": "Chili Powder",
              "weight": 4.050000000000001,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
              "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
            },
            {
              "text": "1 Teaspoon Sea Salt",
              "quantity": 1,
              "measure": "teaspoon",
              "food": "Sea Salt",
              "weight": 4.854166666912875,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "1 Tablespoon Olive Oil",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "Olive Oil",
              "weight": 13.5,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            }
          ],
          "calories": 4736.6199814995,
          "totalCO2Emissions": 64319.574120156416,
          "co2EmissionsClass": "G",
          "totalWeight": 1956.171739166913,
          "totalTime": 0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 4736.6199814995,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 348.43463670411,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 136.86230909974552,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 153.12542994462876,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 14.462802908209998,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 3.5128500000000003,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 2.0454000000000003,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 0.2911950000000001,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 371.256156883415,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1589.44436352625,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2932.9086894245925,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 491.8086363313091,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 381.3899507316691,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 5758.120005668105,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 27.580332748148308,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 65.64171325304191,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 3323.1941452252504,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 61.321500000000015,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 8.18835,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.9896909635689999,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.6142150180730002,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 120.050016137174,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 10.0808174720355,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 208.62679998575004,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 208.62679998575004,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 20.569279998575002,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 11.163651635832501,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 42.326802725200004,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1158.357704344326,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 236.830999074975,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 536.0532872370924,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 684.3115454987276,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 1.1709500000000002,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 8.181600000000001,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 742.51231376683,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 529.8147878420833,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 122.20452872602468,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 49.18086363313091,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 90.80713112658788,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 122.51319160995968,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 153.22407082304616,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 596.7428477549265,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 474.74202074646433,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 6.813500000000001,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 9.098166666666668,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 82.47424696408332,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 124.1703860056154,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 750.3126008573374,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 775.4474978488846,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 52.15669999643751,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 857.0533332739585,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 74.42434423888334,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 35.272335604333335,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 348.43463670411,
              "hasRDI": true,
              "daily": 536.0532872370924,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 136.86230909974552,
                  "hasRDI": true,
                  "daily": 684.3115454987276,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 153.12542994462876,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 14.462802908209998,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 3.5128500000000003,
              "hasRDI": true,
              "daily": 1.1709500000000002,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 2.0454000000000003,
                  "hasRDI": true,
                  "daily": 8.181600000000001,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 0.2911950000000001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 371.256156883415,
              "hasRDI": true,
              "daily": 742.51231376683,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1589.44436352625,
              "hasRDI": true,
              "daily": 529.8147878420833,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 2932.9086894245925,
              "hasRDI": true,
              "daily": 122.20452872602468,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 491.8086363313091,
              "hasRDI": true,
              "daily": 49.18086363313091,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 381.3899507316691,
              "hasRDI": true,
              "daily": 90.80713112658788,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 5758.120005668105,
              "hasRDI": true,
              "daily": 122.51319160995968,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 27.580332748148308,
              "hasRDI": true,
              "daily": 153.22407082304616,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 65.64171325304191,
              "hasRDI": true,
              "daily": 596.7428477549265,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 3323.1941452252504,
              "hasRDI": true,
              "daily": 474.74202074646433,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 61.321500000000015,
              "hasRDI": true,
              "daily": 6.813500000000001,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 8.18835,
              "hasRDI": true,
              "daily": 9.098166666666668,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.9896909635689999,
              "hasRDI": true,
              "daily": 82.47424696408332,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.6142150180730002,
              "hasRDI": true,
              "daily": 124.1703860056154,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 120.050016137174,
              "hasRDI": true,
              "daily": 750.3126008573374,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 10.0808174720355,
              "hasRDI": true,
              "daily": 775.4474978488846,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 208.62679998575004,
              "hasRDI": true,
              "daily": 52.15669999643751,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 208.62679998575004,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 20.569279998575002,
              "hasRDI": true,
              "daily": 857.0533332739585,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": true,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 11.163651635832501,
              "hasRDI": true,
              "daily": 74.42434423888334,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 42.326802725200004,
              "hasRDI": true,
              "daily": 35.272335604333335,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1158.357704344326,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/5933268e7179c7f6686aaad9903a41ae?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5654cf49386d9e00a5ace93b2c3c7b52",
          "label": "Miso Beef Noodle Soup",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d11/d117b9774b1cefa60bf27cc58dfd742a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=302fff843c353e97eeca107e8bf594c4a679a57a33cc45de8ea10770a3a8bb6c",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d11/d117b9774b1cefa60bf27cc58dfd742a-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=14da97e9349825f9e00f8ad995b61a67bcbfd916ee3199ef87ec73f49201e800",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d11/d117b9774b1cefa60bf27cc58dfd742a-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bf4837246f9a3ab52bdc12e5eff6eaba1515dc958fb199fecac33100fd07a06a",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d11/d117b9774b1cefa60bf27cc58dfd742a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=302fff843c353e97eeca107e8bf594c4a679a57a33cc45de8ea10770a3a8bb6c",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d11/d117b9774b1cefa60bf27cc58dfd742a-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2da93b3af9591b3ffc922bc8d6979905a72e1f2074938da18b110ab441389de5",
              "width": 600,
              "height": 600
            }
          },
          "source": "San Francisco Gate",
          "url": "http://www.sfgate.com/food/recipes/detail.html?rid=18945&sorig=qs",
          "shareAs": "http://www.edamam.com/recipe/miso-beef-noodle-soup-5654cf49386d9e00a5ace93b2c3c7b52/beef",
          "yield": 10,
          "dietLabels": [
            "Low-Fat"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "No oil added",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Gluten",
            "Wheat",
            "Sulfites"
          ],
          "ingredientLines": [
            "6 cups low-sodium beef broth",
            "2 tablespoons red miso paste",
            "1 pound lean beef, cut into thin slices",
            "2 cups thinly sliced green onions",
            "1 pound udon noodles",
            "Kosher salt and freshly ground black pepper"
          ],
          "ingredients": [
            {
              "text": "6 cups low-sodium beef broth",
              "quantity": 6,
              "measure": "cup",
              "food": "low-sodium beef broth",
              "weight": 1440,
              "foodCategory": "canned soup",
              "foodId": "food_bxd832fblxgfaibgn0zk0b6dg6dh",
              "image": "https://www.edamam.com/food-img/428/4284513ddbf46e51f0f33566c0d61715.jpg"
            },
            {
              "text": "2 tablespoons red miso paste",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "miso paste",
              "weight": 34,
              "foodCategory": "plant-based protein",
              "foodId": "food_agp37bpbhswz7sa7hlwj7b8vzcbt",
              "image": "https://www.edamam.com/food-img/352/3525e5a38bb13c74aa34ef6c0273bf33.jpg"
            },
            {
              "text": "1 pound lean beef, cut into thin slices",
              "quantity": 1,
              "measure": "pound",
              "food": "lean beef",
              "weight": 453.59237,
              "foodCategory": "meats",
              "foodId": "food_aorkcwpb5mij33awfffroag0z8j1",
              "image": "https://www.edamam.com/food-img/e74/e7477c29517cdc4bcfcc1a0592b54613.jpg"
            },
            {
              "text": "2 cups thinly sliced green onions",
              "quantity": 2,
              "measure": "cup",
              "food": "green onions",
              "weight": 200,
              "foodCategory": "vegetables",
              "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
              "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
            },
            {
              "text": "1 pound udon noodles",
              "quantity": 1,
              "measure": "pound",
              "food": "udon noodles",
              "weight": 453.59237,
              "foodCategory": "grains",
              "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
              "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
            },
            {
              "text": "Kosher salt and freshly ground black pepper",
              "quantity": 0,
              "measure": null,
              "food": "Kosher salt",
              "weight": 15.487108440000002,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Kosher salt and freshly ground black pepper",
              "quantity": 0,
              "measure": null,
              "food": "black pepper",
              "weight": 7.743554220000001,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            }
          ],
          "calories": 2583.5785525922,
          "totalCO2Emissions": 189333.9152368414,
          "co2EmissionsClass": "G",
          "totalWeight": 2592.730365784319,
          "totalTime": 0,
          "cuisineType": [
            "japanese"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "soup"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2583.5785525922,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 28.919420217572004,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 10.248295767242402,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.9661517481000002,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 11.725943010385802,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 5.246711739815602,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 385.56176957969,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 23.510075057660003,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 26.704475026008005,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 195.292329361458,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 299.37096420000006,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 6020.500969642726,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 472.5537718700366,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 501.52192853184323,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 6030.523594708946,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 24.334778900924256,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 35.58294237078232,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2391.9924482676,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 112.52260703939999,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 37.6,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.3979900675576,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.6068208485960005,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 45.255863117734606,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 4.224699569780201,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 264.36672561740005,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 264.36672561740005,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 11.004135354000002,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.4535923700000001,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 2.507273125888,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 445.33567617814003,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1951.150781751941,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 129.17892762961,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 44.491415719341546,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 51.24147883621201,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 128.52058985989666,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 94.04030023064003,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 390.584658722916,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 99.79032140000002,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 250.8542070684469,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 47.25537718700366,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 119.4099829837722,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 128.3090126533818,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 135.19321611624588,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 323.4812942798393,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 341.71320689537146,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 12.502511893266666,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 41.77777777777778,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 116.49917229646667,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 200.52468066123078,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 282.8491444858413,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 324.97688998309235,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 66.09168140435001,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 458.5056397500001,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.0239491333333337,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 16.71515417258667,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 371.1130634817834,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 28.919420217572004,
              "hasRDI": true,
              "daily": 44.491415719341546,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 10.248295767242402,
                  "hasRDI": true,
                  "daily": 51.24147883621201,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.9661517481000002,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 11.725943010385802,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 5.246711739815602,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 385.56176957969,
              "hasRDI": true,
              "daily": 128.52058985989666,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 23.510075057660003,
                  "hasRDI": true,
                  "daily": 94.04030023064003,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 26.704475026008005,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 195.292329361458,
              "hasRDI": true,
              "daily": 390.584658722916,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 299.37096420000006,
              "hasRDI": true,
              "daily": 99.79032140000002,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 6020.500969642726,
              "hasRDI": true,
              "daily": 250.8542070684469,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 472.5537718700366,
              "hasRDI": true,
              "daily": 47.25537718700366,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 501.52192853184323,
              "hasRDI": true,
              "daily": 119.4099829837722,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 6030.523594708946,
              "hasRDI": true,
              "daily": 128.3090126533818,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 24.334778900924256,
              "hasRDI": true,
              "daily": 135.19321611624588,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 35.58294237078232,
              "hasRDI": true,
              "daily": 323.4812942798393,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2391.9924482676,
              "hasRDI": true,
              "daily": 341.71320689537146,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 112.52260703939999,
              "hasRDI": true,
              "daily": 12.502511893266666,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 37.6,
              "hasRDI": true,
              "daily": 41.77777777777778,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.3979900675576,
              "hasRDI": true,
              "daily": 116.49917229646667,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.6068208485960005,
              "hasRDI": true,
              "daily": 200.52468066123078,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 45.255863117734606,
              "hasRDI": true,
              "daily": 282.8491444858413,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 4.224699569780201,
              "hasRDI": true,
              "daily": 324.97688998309235,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 264.36672561740005,
              "hasRDI": true,
              "daily": 66.09168140435001,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 264.36672561740005,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 11.004135354000002,
              "hasRDI": true,
              "daily": 458.5056397500001,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.4535923700000001,
              "hasRDI": true,
              "daily": 3.0239491333333337,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 2.507273125888,
              "hasRDI": true,
              "daily": 16.71515417258667,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 445.33567617814003,
              "hasRDI": true,
              "daily": 371.1130634817834,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1951.150781751941,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/5654cf49386d9e00a5ace93b2c3c7b52?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4b618d914641134be87084c4cb217a3f",
          "label": "Beef Carnitas",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/431/431ea8ed1e8b779dc8644e0c3a8d5c19.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=16da22a6161276411cc357bb0fa80e81bb369e9302655eecb60018f46486db1c",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/431/431ea8ed1e8b779dc8644e0c3a8d5c19-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3c200a8fbc4ee048bbbbfa7cf7543158c19c61edc648e0dfa894f699debc0487",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/431/431ea8ed1e8b779dc8644e0c3a8d5c19-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6043219f4e1dd3410742c564d6a054cf5bd7f223154586e1ad4851a449078b83",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/431/431ea8ed1e8b779dc8644e0c3a8d5c19.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=16da22a6161276411cc357bb0fa80e81bb369e9302655eecb60018f46486db1c",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/431/431ea8ed1e8b779dc8644e0c3a8d5c19-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bef21adc9e65f7ec6bf22e043c465645e6b32d4f3a889a3cb55438947baeb740",
              "width": 600,
              "height": 600
            }
          },
          "source": "Men's Health",
          "url": "https://www.menshealth.com/recipes/beef-carnitas",
          "shareAs": "http://www.edamam.com/recipe/beef-carnitas-4b618d914641134be87084c4cb217a3f/beef",
          "yield": 4,
          "dietLabels": [
            "High-Protein",
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Keto-Friendly",
            "Paleo",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "No oil added",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "2 lb lb lean beef stew meat, cut into 1/2\" pieces",
            "3/4 cup mild salsa",
            "2 tbsp chopped chipotle chili peppers in adobo sauce",
            "1/2 tsp salt",
            "tsp black pepper",
            "1 C beef stock (we used Kitchen Basics) or water"
          ],
          "ingredients": [
            {
              "text": "2 lb lb lean beef stew meat, cut into 1/2\" pieces",
              "quantity": 1,
              "measure": "pound",
              "food": "lean beef stew meat",
              "weight": 453.59237,
              "foodCategory": "meats",
              "foodId": "food_aorkcwpb5mij33awfffroag0z8j1",
              "image": "https://www.edamam.com/food-img/e74/e7477c29517cdc4bcfcc1a0592b54613.jpg"
            },
            {
              "text": "3/4 cup mild salsa",
              "quantity": 0.75,
              "measure": "cup",
              "food": "salsa",
              "weight": 195,
              "foodCategory": "canned soup",
              "foodId": "food_b0t3obfawlm5k2b6erxscacez35u",
              "image": "https://www.edamam.com/food-img/995/995d0f166754a0475c181b9c156fec43.jpg"
            },
            {
              "text": "2 tbsp chopped chipotle chili peppers in adobo sauce",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "chipotle chili",
              "weight": 16.99999999971258,
              "foodCategory": "canned vegetables",
              "foodId": "food_bumzpysb5k05cibmscqp2a0fwgpa",
              "image": "https://www.edamam.com/food-img/c34/c343c40fbfe50bd72bbb3890c83a4315.jpeg"
            },
            {
              "text": "1/2 tsp salt",
              "quantity": 0.5,
              "measure": "teaspoon",
              "food": "salt",
              "weight": 3,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "tsp black pepper",
              "quantity": 1,
              "measure": "teaspoon",
              "food": "black pepper",
              "weight": 2.9,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "1 C beef stock (we used Kitchen Basics) or water",
              "quantity": 1,
              "measure": "cup",
              "food": "beef stock",
              "weight": 240,
              "foodCategory": "canned soup",
              "foodId": "food_bxd832fblxgfaibgn0zk0b6dg6dh",
              "image": "https://www.edamam.com/food-img/428/4284513ddbf46e51f0f33566c0d61715.jpg"
            }
          ],
          "calories": 661.0535387999397,
          "totalCO2Emissions": 69448.20318759941,
          "co2EmissionsClass": "G",
          "totalWeight": 908.4923699997127,
          "totalTime": 10,
          "cuisineType": [
            "mexican"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 661.0535387999397,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 18.757375562999712,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 8.113362627599972,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.9661517481,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 9.971996191999983,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 1.576352101899842,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 19.658093976985338,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 4.464699999996263,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 9.561959999990458,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 107.52203902999742,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 299.37096420000006,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2417.3498196966284,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 155.23993179997987,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 144.10747399995978,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2698.477608299463,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 11.773622139998563,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 25.834849586999514,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1096.1800532999512,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 157.80484739828984,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 15.264999999804553,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.5168558959999425,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.0656270289998564,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 27.987391002997708,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 3.0860536615995606,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 32.93669479997126,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 32.93669479997126,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 10.976935354000002,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.4535923700000001,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 3.230848554998017,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 21.46018554997499,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 750.2932261227343,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 33.052676939996985,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 28.8575008661534,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 40.56681313799986,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 6.552697992328446,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 17.858799999985052,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 215.04407805999483,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 99.79032140000002,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 100.72290915402618,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 15.523993179997987,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 34.31130333332376,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 57.41441719786092,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 65.40901188888091,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 234.86226897272283,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 156.5971504714216,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 17.533871933143317,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 16.96111111089395,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 43.07132466666188,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 81.97130992306587,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 174.92119376873566,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 237.3887431999662,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 8.234173699992814,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 457.3723064166668,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.0239491333333337,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 21.538990366653444,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 17.883487958312493,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 18.757375562999712,
              "hasRDI": true,
              "daily": 28.8575008661534,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 8.113362627599972,
                  "hasRDI": true,
                  "daily": 40.56681313799986,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.9661517481,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 9.971996191999983,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 1.576352101899842,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 19.658093976985338,
              "hasRDI": true,
              "daily": 6.552697992328446,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 4.464699999996263,
                  "hasRDI": true,
                  "daily": 17.858799999985052,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 9.561959999990458,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 107.52203902999742,
              "hasRDI": true,
              "daily": 215.04407805999483,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 299.37096420000006,
              "hasRDI": true,
              "daily": 99.79032140000002,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 2417.3498196966284,
              "hasRDI": true,
              "daily": 100.72290915402618,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 155.23993179997987,
              "hasRDI": true,
              "daily": 15.523993179997987,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 144.10747399995978,
              "hasRDI": true,
              "daily": 34.31130333332376,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2698.477608299463,
              "hasRDI": true,
              "daily": 57.41441719786092,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 11.773622139998563,
              "hasRDI": true,
              "daily": 65.40901188888091,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 25.834849586999514,
              "hasRDI": true,
              "daily": 234.86226897272283,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1096.1800532999512,
              "hasRDI": true,
              "daily": 156.5971504714216,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 157.80484739828984,
              "hasRDI": true,
              "daily": 17.533871933143317,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 15.264999999804553,
              "hasRDI": true,
              "daily": 16.96111111089395,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.5168558959999425,
              "hasRDI": true,
              "daily": 43.07132466666188,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.0656270289998564,
              "hasRDI": true,
              "daily": 81.97130992306587,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 27.987391002997708,
              "hasRDI": true,
              "daily": 174.92119376873566,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 3.0860536615995606,
              "hasRDI": true,
              "daily": 237.3887431999662,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 32.93669479997126,
              "hasRDI": true,
              "daily": 8.234173699992814,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 32.93669479997126,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 10.976935354000002,
              "hasRDI": true,
              "daily": 457.3723064166668,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.4535923700000001,
              "hasRDI": true,
              "daily": 3.0239491333333337,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 3.230848554998017,
              "hasRDI": true,
              "daily": 21.538990366653444,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 21.46018554997499,
              "hasRDI": true,
              "daily": 17.883487958312493,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 750.2932261227343,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/4b618d914641134be87084c4cb217a3f?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_97baa73415846b0484daf943d7380e05",
          "label": "Quick Beef Tacos",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/16a/16a9856dc2bee643d2f2152892ee3b0a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9b2c8107adb9319b23cc8d8e739bba01995f5bbb1a665ed53fa200a55f12c24c",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/16a/16a9856dc2bee643d2f2152892ee3b0a-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5aa708580c6a11d2bb3f8db4ac5062fb26c6823d50cfb9e4432998f6c2b7b974",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/16a/16a9856dc2bee643d2f2152892ee3b0a-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a95cae1d77b8c3aca79458da2295b630beba1d27d5f9c8d6f53658250ddbcadd",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/16a/16a9856dc2bee643d2f2152892ee3b0a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9b2c8107adb9319b23cc8d8e739bba01995f5bbb1a665ed53fa200a55f12c24c",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/16a/16a9856dc2bee643d2f2152892ee3b0a-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=08e93866e8495c9ec66c35493b00cdb9f8ce6bc63169efd8cae478a552261105",
              "width": 600,
              "height": 600
            }
          },
          "source": "Real Simple",
          "url": "https://www.realsimple.com/food-recipes/browse-all-recipes/beef-tacos-recipe",
          "shareAs": "http://www.edamam.com/recipe/quick-beef-tacos-97baa73415846b0484daf943d7380e05/beef",
          "yield": 4,
          "dietLabels": [
            "High-Fiber",
            "Low-Carb"
          ],
          "healthLabels": [
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free"
          ],
          "cautions": [
            "Eggs",
            "Milk",
            "Sulfites"
          ],
          "ingredientLines": [
            "1 1/2 pounds ground beef",
            "1 teaspoon ground cumin",
            "1 1/2 cups jarred salsa",
            "kosher salt",
            "8 taco shells",
            "1 avocado, diced",
            "1/2 cup sour cream",
            "1 cup fresh cilantro"
          ],
          "ingredients": [
            {
              "text": "1 1/2 pounds ground beef",
              "quantity": 1.5,
              "measure": "pound",
              "food": "ground beef",
              "weight": 680.388555,
              "foodCategory": "meats",
              "foodId": "food_boq91pbbhklr6sb0d9sbybzgklkm",
              "image": "https://www.edamam.com/food-img/cfa/cfae8f9276eaf8f0d9349ba662744a0c.jpg"
            },
            {
              "text": "1 teaspoon ground cumin",
              "quantity": 1,
              "measure": "teaspoon",
              "food": "cumin",
              "weight": 2.1,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
              "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
            },
            {
              "text": "1 1/2 cups jarred salsa",
              "quantity": 1.5,
              "measure": "cup",
              "food": "salsa",
              "weight": 390,
              "foodCategory": "canned soup",
              "foodId": "food_b0t3obfawlm5k2b6erxscacez35u",
              "image": "https://www.edamam.com/food-img/995/995d0f166754a0475c181b9c156fec43.jpg"
            },
            {
              "text": "kosher salt",
              "quantity": 0,
              "measure": null,
              "food": "kosher salt",
              "weight": 9.036531329999999,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "8 taco shells",
              "quantity": 8,
              "measure": "<unit>",
              "food": "taco shells",
              "weight": 101.6,
              "foodCategory": "quick breads and pastries",
              "foodId": "food_amx6njaaa4q9lsaz4k98faejx12a",
              "image": "https://www.edamam.com/food-img/def/def506222dc404affdfbf7b7133a34c6.jpg"
            },
            {
              "text": "1 avocado, diced",
              "quantity": 1,
              "measure": "<unit>",
              "food": "avocado",
              "weight": 201,
              "foodCategory": "fruit",
              "foodId": "food_b0yuze4b1g3afpanijno5abtiu28",
              "image": "https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg"
            },
            {
              "text": "1/2 cup sour cream",
              "quantity": 0.5,
              "measure": "cup",
              "food": "sour cream",
              "weight": 115,
              "foodCategory": "Dairy",
              "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
              "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
            },
            {
              "text": "1 cup fresh cilantro",
              "quantity": 1,
              "measure": "cup",
              "food": "cilantro",
              "weight": 16,
              "foodCategory": "vegetables",
              "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
              "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
            }
          ],
          "calories": 2880.0079296999993,
          "totalCO2Emissions": 71641.6571857307,
          "co2EmissionsClass": "G",
          "totalWeight": 1506.0885549999998,
          "totalTime": 20,
          "cuisineType": [
            "mexican"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2880.0079296999993,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 211.58632100000005,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 76.45672135455001,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 8.203336949,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 93.20726934640001,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 14.267663371549999,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 112.68738,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 27.9627,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 21.715049999999998,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 136.45658489350004,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 542.87587405,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 3606.7484463000005,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 521.9609399000001,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 340.13005435,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 4441.1530985,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 19.403537967,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 32.721201599,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1699.2709169000002,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 393.56554220000004,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 33.026700000000005,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.84850107865,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.72535371805,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 38.91802521985001,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 3.7053980326500002,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 330.57719885000006,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 290.95319885000004,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 24.384,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 14.882315077000001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.1403885550000001,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 11.752330543500001,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 131.35799399,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1023.0049589785001,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 144.00039648499998,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 325.517416923077,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 382.28360677275003,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 37.56246,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 111.85079999999999,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 272.9131697870001,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 180.95862468333334,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 150.28118526250003,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 52.19609399000001,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 80.98334627380952,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 94.49261911702128,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 107.79743314999999,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 297.4654690818181,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 242.75298812857147,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 43.729504688888895,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 36.69633333333334,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 70.70842322083334,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 132.71951677307692,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 243.23765762406256,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 285.0306178961539,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 82.64429971250001,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 620.0964615416667,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 7.602590366666667,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 78.34887029000001,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 109.46499499166667,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 211.58632100000005,
              "hasRDI": true,
              "daily": 325.517416923077,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 76.45672135455001,
                  "hasRDI": true,
                  "daily": 382.28360677275003,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 8.203336949,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 93.20726934640001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 14.267663371549999,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 112.68738,
              "hasRDI": true,
              "daily": 37.56246,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 27.9627,
                  "hasRDI": true,
                  "daily": 111.85079999999999,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 21.715049999999998,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 136.45658489350004,
              "hasRDI": true,
              "daily": 272.9131697870001,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 542.87587405,
              "hasRDI": true,
              "daily": 180.95862468333334,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 3606.7484463000005,
              "hasRDI": true,
              "daily": 150.28118526250003,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 521.9609399000001,
              "hasRDI": true,
              "daily": 52.19609399000001,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 340.13005435,
              "hasRDI": true,
              "daily": 80.98334627380952,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 4441.1530985,
              "hasRDI": true,
              "daily": 94.49261911702128,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 19.403537967,
              "hasRDI": true,
              "daily": 107.79743314999999,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 32.721201599,
              "hasRDI": true,
              "daily": 297.4654690818181,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1699.2709169000002,
              "hasRDI": true,
              "daily": 242.75298812857147,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 393.56554220000004,
              "hasRDI": true,
              "daily": 43.729504688888895,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 33.026700000000005,
              "hasRDI": true,
              "daily": 36.69633333333334,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.84850107865,
              "hasRDI": true,
              "daily": 70.70842322083334,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.72535371805,
              "hasRDI": true,
              "daily": 132.71951677307692,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 38.91802521985001,
              "hasRDI": true,
              "daily": 243.23765762406256,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 3.7053980326500002,
              "hasRDI": true,
              "daily": 285.0306178961539,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 330.57719885000006,
              "hasRDI": true,
              "daily": 82.64429971250001,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 290.95319885000004,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 24.384,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 14.882315077000001,
              "hasRDI": true,
              "daily": 620.0964615416667,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.1403885550000001,
              "hasRDI": true,
              "daily": 7.602590366666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 11.752330543500001,
              "hasRDI": true,
              "daily": 78.34887029000001,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 131.35799399,
              "hasRDI": true,
              "daily": 109.46499499166667,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1023.0049589785001,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/97baa73415846b0484daf943d7380e05?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_38894a45479e914e45e8b8b9b0b9670f",
          "label": "Best Beef Brisket",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/20b/20bbd08a14d9ebc74ec0f09a692174ca.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ab2bfef5988742fb29cc2701be87f406bbb0a246fc3106ff1f44b86ed99653da",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/20b/20bbd08a14d9ebc74ec0f09a692174ca-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=66cabfa4ce92f085ff1483dbc6a187de5855298d989c0b9f03c41ffd8ccd0f0c",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/20b/20bbd08a14d9ebc74ec0f09a692174ca-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0f991c377fc871cdf3a44013288b9783c2fb1e37c9c836e555ae19c0a5078d81",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/20b/20bbd08a14d9ebc74ec0f09a692174ca.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ab2bfef5988742fb29cc2701be87f406bbb0a246fc3106ff1f44b86ed99653da",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/20b/20bbd08a14d9ebc74ec0f09a692174ca-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1a07dfc47ee423cee9ee1b0c0b6b8b3e75cae80cc05f52f0c2cb7187982baaa2",
              "width": 600,
              "height": 600
            }
          },
          "source": "Delish",
          "url": "https://www.delish.com/cooking/recipe-ideas/a19473587/best-beef-brisket-recipe/",
          "shareAs": "http://www.edamam.com/recipe/best-beef-brisket-38894a45479e914e45e8b8b9b0b9670f/beef",
          "yield": 10,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "4 lb. beef brisket",
            "Kosher salt",
            "Freshly ground black pepper",
            "3 lb. baby potatoes, halved",
            "Extra-virgin olive oil",
            "3 c. low-sodium beef broth"
          ],
          "ingredients": [
            {
              "text": "4 lb. beef brisket",
              "quantity": 4,
              "measure": "pound",
              "food": "beef brisket",
              "weight": 1814.36948,
              "foodCategory": "meats",
              "foodId": "food_akcl1lrbxwowcrai1l6xkbtvxhsn",
              "image": "https://www.edamam.com/food-img/e0d/e0dd59302a5bf4ff2d2e4797cdfe4160.jpg"
            },
            {
              "text": "Kosher salt",
              "quantity": 0,
              "measure": null,
              "food": "Kosher salt",
              "weight": 23.37087954,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Freshly ground black pepper",
              "quantity": 0,
              "measure": null,
              "food": "black pepper",
              "weight": 11.68543977,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "3 lb. baby potatoes, halved",
              "quantity": 3,
              "measure": "pound",
              "food": "baby potatoes",
              "weight": 1360.77711,
              "foodCategory": "vegetables",
              "foodId": "food_b5m473aabh39qbbre3ypaa4uwd7j",
              "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
            },
            {
              "text": "Extra-virgin olive oil",
              "quantity": 0,
              "measure": null,
              "food": "Extra-virgin olive oil",
              "weight": 52.973993624,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "3 c. low-sodium beef broth",
              "quantity": 3,
              "measure": "cup",
              "food": "low-sodium beef broth",
              "weight": 720,
              "foodCategory": "canned soup",
              "foodId": "food_bxd832fblxgfaibgn0zk0b6dg6dh",
              "image": "https://www.edamam.com/food-img/428/4284513ddbf46e51f0f33566c0d61715.jpg"
            }
          ],
          "calories": 6646.678696958861,
          "totalCO2Emissions": 253120.55818294428,
          "co2EmissionsClass": "G",
          "totalWeight": 3976.9520892860887,
          "totalTime": 265,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 6646.678696958861,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 458.199099867502,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 170.70504890220033,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 211.63820767290696,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 21.643630301258124,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 253.840599849915,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 32.89351268181,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 14.576848272528,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 365.2992714101031,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1705.5073112000002,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 9208.449711282281,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 585.7473587314414,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 710.1188043656209,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 12135.013843650908,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 41.2614962414053,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 82.07428542215511,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 3992.8718947366,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 3.1550687379,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 268.07309067,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 2.6089005989516005,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 3.361500621986,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 93.03903539917113,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 12.536384985030704,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 397.4041155609,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 397.4041155609,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 25.038298824,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 15.733163133652003,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 108.438455315138,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 2848.185706433127,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 332.33393484794306,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 704.9216921038493,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 853.5252445110016,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 84.613533283305,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 131.57405072724,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 730.5985428202061,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 568.5024370666667,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 383.6854046367617,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 58.57473587314414,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 169.0759058013383,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 258.1917839074661,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 229.23053467447386,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 746.1298674741374,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 570.4102706766572,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 0.35056319310000006,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 297.8589896333333,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 217.40838324596672,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 258.576970922,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 581.4939712448196,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 964.3373065408234,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 99.351028890225,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1043.2624510000003,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 104.8877542243467,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 90.36537942928166,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 458.199099867502,
              "hasRDI": true,
              "daily": 704.9216921038493,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 170.70504890220033,
                  "hasRDI": true,
                  "daily": 853.5252445110016,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 211.63820767290696,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 21.643630301258124,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 253.840599849915,
              "hasRDI": true,
              "daily": 84.613533283305,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 32.89351268181,
                  "hasRDI": true,
                  "daily": 131.57405072724,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 14.576848272528,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 365.2992714101031,
              "hasRDI": true,
              "daily": 730.5985428202061,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1705.5073112000002,
              "hasRDI": true,
              "daily": 568.5024370666667,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 9208.449711282281,
              "hasRDI": true,
              "daily": 383.6854046367617,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 585.7473587314414,
              "hasRDI": true,
              "daily": 58.57473587314414,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 710.1188043656209,
              "hasRDI": true,
              "daily": 169.0759058013383,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 12135.013843650908,
              "hasRDI": true,
              "daily": 258.1917839074661,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 41.2614962414053,
              "hasRDI": true,
              "daily": 229.23053467447386,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 82.07428542215511,
              "hasRDI": true,
              "daily": 746.1298674741374,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 3992.8718947366,
              "hasRDI": true,
              "daily": 570.4102706766572,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 3.1550687379,
              "hasRDI": true,
              "daily": 0.35056319310000006,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 268.07309067,
              "hasRDI": true,
              "daily": 297.8589896333333,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 2.6089005989516005,
              "hasRDI": true,
              "daily": 217.40838324596672,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 3.361500621986,
              "hasRDI": true,
              "daily": 258.576970922,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 93.03903539917113,
              "hasRDI": true,
              "daily": 581.4939712448196,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 12.536384985030704,
              "hasRDI": true,
              "daily": 964.3373065408234,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 397.4041155609,
              "hasRDI": true,
              "daily": 99.351028890225,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 397.4041155609,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 25.038298824,
              "hasRDI": true,
              "daily": 1043.2624510000003,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": true,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 15.733163133652003,
              "hasRDI": true,
              "daily": 104.8877542243467,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 108.438455315138,
              "hasRDI": true,
              "daily": 90.36537942928166,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 2848.185706433127,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/38894a45479e914e45e8b8b9b0b9670f?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_748325092db1787e8e5faabfc3ef5096",
          "label": "Beef Noodle Soup",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/855/855b4d68b6159a0e374870d041d49edf.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=801ea68783127f7019251b29480294212086b8616f939fc4ca7f0f5ad0bd1700",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/855/855b4d68b6159a0e374870d041d49edf-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e352bd820b90b43418b12d43c61cb0f9713ebf985f74c79246f5702b2b9e5161",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/855/855b4d68b6159a0e374870d041d49edf-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=55dde032918f59aed300bb5a28f0c37fd659f3735d2b225e5f26fee9967c6c6e",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/855/855b4d68b6159a0e374870d041d49edf.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=801ea68783127f7019251b29480294212086b8616f939fc4ca7f0f5ad0bd1700",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/855/855b4d68b6159a0e374870d041d49edf-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1e28509f36b0c471ed17dd4c751947cc281ed42b1da49d05bea2526d1a81acda",
              "width": 600,
              "height": 600
            }
          },
          "source": "My Recipes",
          "url": "http://www.myrecipes.com/recipe/beef-noodle-soup-190405/",
          "shareAs": "http://www.edamam.com/recipe/beef-noodle-soup-748325092db1787e8e5faabfc3ef5096/beef",
          "yield": 10,
          "dietLabels": [],
          "healthLabels": [
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free"
          ],
          "cautions": [
            "Sulfites",
            "FODMAP"
          ],
          "ingredientLines": [
            "1 pound(s) ground beef",
            "1 46-ounce can(s) V8 juice",
            "1 envelope(s) onion soup mix",
            "1 3-ounce package(s) beef ramen noodles",
            "1 16-ounce package(s) frozen mixed vegetables"
          ],
          "ingredients": [
            {
              "text": "1 pound(s) ground beef",
              "quantity": 1,
              "measure": "pound",
              "food": "ground beef",
              "weight": 453.59237,
              "foodCategory": "meats",
              "foodId": "food_boq91pbbhklr6sb0d9sbybzgklkm",
              "image": "https://www.edamam.com/food-img/cfa/cfae8f9276eaf8f0d9349ba662744a0c.jpg"
            },
            {
              "text": "1 46-ounce can(s) V8 juice",
              "quantity": 46,
              "measure": "ounce",
              "food": "V8",
              "weight": 1304.07806375,
              "foodCategory": "mixed soup",
              "foodId": "food_bcpkqf5ah9a82ibxqfnjwanrhte7",
              "image": "https://www.edamam.com/food-img/53e/53e1259b6d982b28dd48bd01fdabf14c.jpg"
            },
            {
              "text": "1 envelope(s) onion soup mix",
              "quantity": 1,
              "measure": "envelope",
              "food": "onion soup mix",
              "weight": 39,
              "foodCategory": "canned soup",
              "foodId": "food_bzsq9hjb9apym9av0rhvwbti40cf",
              "image": "https://www.edamam.com/food-img/c50/c5061b7daa91cb5229972c23b2c3136d.jpg"
            },
            {
              "text": "1 3-ounce package(s) beef ramen noodles",
              "quantity": 3,
              "measure": "ounce",
              "food": "beef ramen noodles",
              "weight": 85.048569375,
              "foodCategory": "canned soup",
              "foodId": "food_ay77v5gbwm3o1aa1e92ghaeynkw1",
              "image": "https://www.edamam.com/food-img/f3c/f3c52fcc8e78fc210cfbea6b9a551c6b.jpg"
            },
            {
              "text": "1 16-ounce package(s) frozen mixed vegetables",
              "quantity": 16,
              "measure": "ounce",
              "food": "frozen mixed vegetables",
              "weight": 453.59237,
              "foodCategory": "vegetables",
              "foodId": "food_bitqzx8b319psvbib2dufarphbxy",
              "image": "https://www.edamam.com/food-img/f3f/f3fa6996eba331be219778406f67a5a3.jpg"
            }
          ],
          "calories": 2241.90171053125,
          "totalCO2Emissions": 54536.23597891251,
          "co2EmissionsClass": "G",
          "totalWeight": 2335.311373125,
          "totalTime": 0,
          "cuisineType": [
            "asian"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "soup"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2241.90171053125,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 108.28886567418752,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 41.80433038191251,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 5.411073478868751,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 45.56425249091876,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 5.356532472206251,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 191.522515226375,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 33.70177639125,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 46.4101348279375,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 115.15296205187502,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 322.05058270000006,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 7369.49322149375,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 477.3274088687499,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 230.63501404375,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 5134.91185423125,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 20.850962460687505,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 21.956923004187505,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1164.39129768125,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 1170.6583146,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 435.01700476625,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.2646200578062503,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.3967633021875003,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 29.797051932481253,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.15900000096875,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 163.29325320000004,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 163.29325320000004,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 9.706876718000002,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.4535923700000001,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 2.939516406437501,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 16.365033903750003,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1884.5328046272498,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 112.0950855265625,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 166.59825488336543,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 209.02165190956254,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 63.84083840879167,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 134.807105565,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 230.30592410375004,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 107.35019423333335,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 307.0622175622396,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 47.73274088687499,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 54.91309858184524,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 109.25344370704786,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 115.83868033715281,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 199.60839094715914,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 166.3416139544643,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 130.07314606666668,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 483.3522275180556,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 105.38500481718754,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 107.44333093750002,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 186.23157457800784,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 166.07692315144232,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 40.82331330000001,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 404.4531965833334,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.0239491333333337,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 19.59677604291667,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 13.637528253125003,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 108.28886567418752,
              "hasRDI": true,
              "daily": 166.59825488336543,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 41.80433038191251,
                  "hasRDI": true,
                  "daily": 209.02165190956254,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 5.411073478868751,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 45.56425249091876,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 5.356532472206251,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 191.522515226375,
              "hasRDI": true,
              "daily": 63.84083840879167,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 33.70177639125,
                  "hasRDI": true,
                  "daily": 134.807105565,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 46.4101348279375,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 115.15296205187502,
              "hasRDI": true,
              "daily": 230.30592410375004,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 322.05058270000006,
              "hasRDI": true,
              "daily": 107.35019423333335,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 7369.49322149375,
              "hasRDI": true,
              "daily": 307.0622175622396,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 477.3274088687499,
              "hasRDI": true,
              "daily": 47.73274088687499,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 230.63501404375,
              "hasRDI": true,
              "daily": 54.91309858184524,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 5134.91185423125,
              "hasRDI": true,
              "daily": 109.25344370704786,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 20.850962460687505,
              "hasRDI": true,
              "daily": 115.83868033715281,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 21.956923004187505,
              "hasRDI": true,
              "daily": 199.60839094715914,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1164.39129768125,
              "hasRDI": true,
              "daily": 166.3416139544643,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 1170.6583146,
              "hasRDI": true,
              "daily": 130.07314606666668,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 435.01700476625,
              "hasRDI": true,
              "daily": 483.3522275180556,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.2646200578062503,
              "hasRDI": true,
              "daily": 105.38500481718754,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.3967633021875003,
              "hasRDI": true,
              "daily": 107.44333093750002,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 29.797051932481253,
              "hasRDI": true,
              "daily": 186.23157457800784,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.15900000096875,
              "hasRDI": true,
              "daily": 166.07692315144232,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 163.29325320000004,
              "hasRDI": true,
              "daily": 40.82331330000001,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 163.29325320000004,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 9.706876718000002,
              "hasRDI": true,
              "daily": 404.4531965833334,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.4535923700000001,
              "hasRDI": true,
              "daily": 3.0239491333333337,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 2.939516406437501,
              "hasRDI": true,
              "daily": 19.59677604291667,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 16.365033903750003,
              "hasRDI": true,
              "daily": 13.637528253125003,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1884.5328046272498,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/748325092db1787e8e5faabfc3ef5096?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1167243a01be305e677891d6625e28b3",
          "label": "Beef Burger",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ca0/ca0f947d315cfc3695ad41ff715271c5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5fb2b09ac3c79ee80507b33439c00db9e9fe658c9d5b07fd7bf6bfe6327683d4",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ca0/ca0f947d315cfc3695ad41ff715271c5-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=28bdd50d06f58865b0d5df2d1309c8a620ae5f90889a49c46c225b3b0cf829b7",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ca0/ca0f947d315cfc3695ad41ff715271c5-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dc25eec613cb05b2de2b92a11f4c3e2d5bd2845bd83a5c3aefa619f8c353fd3b",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ca0/ca0f947d315cfc3695ad41ff715271c5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5fb2b09ac3c79ee80507b33439c00db9e9fe658c9d5b07fd7bf6bfe6327683d4",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ca0/ca0f947d315cfc3695ad41ff715271c5-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCkIrg5QceR3H%2BQo1mNgVEjoQcVpTlsx6OezxCzAzLEIwIgbC0%2B1kUaOAFXbtfVlNCQLiG%2FM%2Blw98HUJwDBb6ktkSQq2wQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDXueYNp8zWcoNMWlyqvBL6jGSm2UnP8gZdMs35jyLYtKE%2FNVZY9bWn5GmsCNgxnJCRIO8WfAeVzwyFkvoNVVK99Vxt1UjSd6R6ozOQCsF%2BLCriT3WHg2hrBPcF5JcURm3Khe%2BDE0xQa9Uo7QFuZEZu5rhbS2LGkZfxiGZb2Hd8KbCtH54pEHRgNFWpS5B2jvtg34rXQARfC%2BI4cX0NWSAC06iPp3GlAfXQNWGZ0ouVmBCDw0AEKTkKzudBcOaSSLsqTjq6eIOq78h3wM1g%2BIT8be8fjJDA9tSa5i73aRoz9wk95o3Yxz6EyYE%2Fu%2BVo1Cps6em0BHHvB19Pzxjr5cIRUBulsoDk6AG0RU7MqKHTOsuol%2Fe6aHUAU%2Bi6eaMlV%2BmhFP9QdSsFdcqpolDsc6RWax%2FQmA1Zog%2F1TmqvBaVLODFX4A3W2dkmrmsjFmXbjX%2BSYtxjyyC0ySuYfuN7bysBRvgqxKbsu7URiCMxZvXZg%2BKE7JM1AutYPFkfnQXtEzDgyOp403o1vbv2s85hgvr6uDz8eQs2BZ2VwjzoOYqjR2x24ABKkNH6wr55qH0DxOJY5BVtRqU7OQkbPnhAxDcALT4qKorVTsJ%2BbUqs9W2uvGpymOCBEUiPcXR042EpNOEHyTEh7Fd%2Fck1eYFTnMBOVQ6AAs3hnakq%2FnkU5DFtUY5%2FCD5CVc2%2B2p%2BdUIOiaWQ6%2BEC7LtCQ%2Br2gsTCtI3Pv7a3%2BKk9H4veJbgwKxY2%2BURfnhFwZoPYlr3rl2OF1Iw0snQlgY6qQGr08smG9NvDBDwf372Af1DT%2B%2F9AuMbmNHtMOASeW9C0xPUfv5YC%2BtkYcluhiOpDVgk%2Bw4T%2BeRtkVMhE%2BJSPJTm0Bb12zpx7JufxM42dKLIlh5TPnnYvorJpqKOskanZRGySMTj7tlO04lvRiWZyqqaWsMvYHSUelBhPMOWmLY%2FID%2FWoYSXBU0Rav074YAn9HeFuee2eGHf2N27uc2WxPDDEp2ZGzF8G2or&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220717T162830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGHXZBTMG%2F20220717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=862e26fc7aaacdf08f6d7f2af7b9388705318e19258ee511ddf41ff9a83d31e7",
              "width": 600,
              "height": 600
            }
          },
          "source": "Donna Hay",
          "url": "http://www.donnahay.com.au/recipes/mains/meat/beef-burger",
          "shareAs": "http://www.edamam.com/recipe/beef-burger-1167243a01be305e677891d6625e28b3/beef",
          "yield": 8,
          "dietLabels": [],
          "healthLabels": [
            "Dairy-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "700 g minced beef",
            "1 tablespoon tomato paste",
            "2 tablespoons Worcestershire sauce",
            "1 egg",
            "sea salt and cracked black pepper",
            "2 onions, sliced into rings",
            "4 hamburger buns, halved",
            "4 lettuce leaves",
            "8 slices tomato",
            "4 slices beetroot",
            "condiments, such as mustard or tomato sauce (ketchup), to serve",
            "hot chips, to serve"
          ],
          "ingredients": [
            {
              "text": "700 g minced beef",
              "quantity": 700,
              "measure": "gram",
              "food": "beef",
              "weight": 700,
              "foodCategory": "meats",
              "foodId": "food_bknby1la98smrsbwnthinbam42nj",
              "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
            },
            {
              "text": "1 tablespoon tomato paste",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "tomato paste",
              "weight": 16,
              "foodCategory": "canned vegetables",
              "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
              "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
            },
            {
              "text": "2 tablespoons Worcestershire sauce",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "Worcestershire sauce",
              "weight": 34,
              "foodCategory": "canned soup",
              "foodId": "food_ahb8mscbejo58ubexo0itam1i74g",
              "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
            },
            {
              "text": "1 egg",
              "quantity": 1,
              "measure": "<unit>",
              "food": "egg",
              "weight": 43,
              "foodCategory": "Eggs",
              "foodId": "food_bhpradua77pk16aipcvzeayg732r",
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "sea salt and cracked black pepper",
              "quantity": 0,
              "measure": null,
              "food": "sea salt",
              "weight": 10.65,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "sea salt and cracked black pepper",
              "quantity": 0,
              "measure": null,
              "food": "black pepper",
              "weight": 5.325,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "2 onions, sliced into rings",
              "quantity": 2,
              "measure": "<unit>",
              "food": "onions",
              "weight": 250,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "4 hamburger buns, halved",
              "quantity": 4,
              "measure": "<unit>",
              "food": "hamburger buns",
              "weight": 168,
              "foodCategory": "bread, rolls and tortillas",
              "foodId": "food_biei7e8ap2juekb162j79bu40fsu",
              "image": "https://www.edamam.com/food-img/dbe/dbe3d135d1336ed19703d359e33d58dd.jpg"
            },
            {
              "text": "4 lettuce leaves",
              "quantity": 4,
              "measure": "leaf",
              "food": "lettuce",
              "weight": 20,
              "foodCategory": "vegetables",
              "foodId": "food_bf5fxtkbc9alwoajuvsi7amonr5w",
              "image": "https://www.edamam.com/food-img/719/71996625d0cb47e197093ecd52c97dc2.jpg"
            },
            {
              "text": "8 slices tomato",
              "quantity": 8,
              "measure": "slice",
              "food": "tomato",
              "weight": 216,
              "foodCategory": "vegetables",
              "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
              "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
            },
            {
              "text": "4 slices beetroot",
              "quantity": 4,
              "measure": "<unit>",
              "food": "beetroot",
              "weight": 328,
              "foodCategory": "vegetables",
              "foodId": "food_bofj0lnbbcv11zblx10sob7clgvp",
              "image": "https://www.edamam.com/food-img/ec3/ec3d96cdf3b58183c1aad01875b93805.jpg"
            },
            {
              "text": "condiments, such as mustard or tomato sauce (ketchup), to serve",
              "quantity": 0,
              "measure": null,
              "food": "mustard",
              "weight": 26.625,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a34cdj5b0kyuhfbov30xcb50u4dv",
              "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
            }
          ],
          "calories": 1790.03075,
          "totalCO2Emissions": 71366.967255,
          "co2EmissionsClass": "G",
          "totalWeight": 1811.3767534083286,
          "totalTime": 0,
          "cuisineType": [
            "nordic"
          ],
          "mealType": [
            "brunch"
          ],
          "dishType": [
            "sandwiches"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1790.03075,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 46.497769999999996,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 17.1539215,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.7687362500000001,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 21.49366925,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 6.396291,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 163.55637499999997,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 22.842225000000003,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 55.140330000000006,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 185.90424250000007,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 600.96,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 4202.026086000001,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 627.8659208179988,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 352.35001753408324,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 5420.053390272667,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 28.36422828624749,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 42.25329425340833,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2116.8885,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 229.90900000000002,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 75.091875,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 2.05003725,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.0933925,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 45.92786599999999,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 4.946033249999999,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 787.9190000000001,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 542.639,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 144.48,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 16.6087,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.56,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 4.07913,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 66.270775,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1391.1598985068167,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 89.5015375,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 71.53503076923076,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 85.76960749999999,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 54.51879166666666,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 91.36890000000001,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 371.80848500000013,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 200.32,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 175.08442025000005,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 62.78659208179989,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 83.89286131763886,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 115.32028489941843,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 157.57904603470828,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 384.1208568491666,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 302.4126428571429,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 25.545444444444446,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 83.43541666666667,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 170.83643750000002,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 161.03019230769232,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 287.0491624999999,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 380.46409615384607,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 196.97975000000002,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 692.0291666666667,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 10.4,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 27.194200000000002,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 55.22564583333334,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 46.497769999999996,
              "hasRDI": true,
              "daily": 71.53503076923076,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 17.1539215,
                  "hasRDI": true,
                  "daily": 85.76960749999999,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.7687362500000001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 21.49366925,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 6.396291,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 163.55637499999997,
              "hasRDI": true,
              "daily": 54.51879166666666,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 22.842225000000003,
                  "hasRDI": true,
                  "daily": 91.36890000000001,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 55.140330000000006,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 185.90424250000007,
              "hasRDI": true,
              "daily": 371.80848500000013,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 600.96,
              "hasRDI": true,
              "daily": 200.32,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 4202.026086000001,
              "hasRDI": true,
              "daily": 175.08442025000005,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 627.8659208179988,
              "hasRDI": true,
              "daily": 62.78659208179989,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 352.35001753408324,
              "hasRDI": true,
              "daily": 83.89286131763886,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 5420.053390272667,
              "hasRDI": true,
              "daily": 115.32028489941843,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 28.36422828624749,
              "hasRDI": true,
              "daily": 157.57904603470828,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 42.25329425340833,
              "hasRDI": true,
              "daily": 384.1208568491666,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2116.8885,
              "hasRDI": true,
              "daily": 302.4126428571429,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 229.90900000000002,
              "hasRDI": true,
              "daily": 25.545444444444446,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 75.091875,
              "hasRDI": true,
              "daily": 83.43541666666667,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 2.05003725,
              "hasRDI": true,
              "daily": 170.83643750000002,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.0933925,
              "hasRDI": true,
              "daily": 161.03019230769232,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 45.92786599999999,
              "hasRDI": true,
              "daily": 287.0491624999999,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 4.946033249999999,
              "hasRDI": true,
              "daily": 380.46409615384607,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 787.9190000000001,
              "hasRDI": true,
              "daily": 196.97975000000002,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 542.639,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 144.48,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 16.6087,
              "hasRDI": true,
              "daily": 692.0291666666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.56,
              "hasRDI": true,
              "daily": 10.4,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 4.07913,
              "hasRDI": true,
              "daily": 27.194200000000002,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 66.270775,
              "hasRDI": true,
              "daily": 55.22564583333334,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1391.1598985068167,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://api.edamam.com/api/recipes/v2/1167243a01be305e677891d6625e28b3?type=public&app_id=8f26e47b&app_key=ba2508027662216c72a12b54a7bbfcb0&beta=true",
            "title": "Self"
          }
        }
      }
    ]
  }