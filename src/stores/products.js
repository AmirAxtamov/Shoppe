import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import fetch from '../utils/axios.js'

export const useProductsStore = defineStore('counter', () => {

    // const products = ref([

    //     {
    //         id: 1,
    //         img: ['https://www.net-a-porter.com/variants/images/1647597354013099/in/w920_a3-4_q60.jpg', 'https://www.net-a-porter.com/variants/images/1647597354013099/ou/w920_a3-4_q60.jpg', 'https://www.net-a-porter.com/variants/images/1647597354013099/cu/w920_a3-4_q60.jpg', 'https://www.net-a-porter.com/variants/images/1647597354013099/e1/w920_a3-4_q60.jpg'],
    //         title: 'ANITA KO',
    //         price: 1185,
    //         discount: 20,
    //         SKU: 12,
    //         quantity: 32,
    //         isInCard: false,
    //         IsFavorite: false,
    //         category: ['Fashion', 'Style'],
    //         desc: "Anita Ko's earrings are a simple, timeless style you'll wear for years to come. They're crafted from 18-karat white gold and prong-set with 0.25-carats of round-cut diamonds. If you prefer warm-toned jewelry, check our edit for the yellow gold version.",
    //         additional: {
    //             Length: "0.3cm",
    //             Width: "0.3 cm",
    //             Dimentions: "15 x 10 x 1 cm",
    //             Colours: "Silver",
    //             Material: "Gold",

    //         },
    //         reviews: [
    //             {
    //                 name: 'Scarlet withch',
    //                 date: "6 May 2024",
    //                 rating: 3,
    //                 description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
    //             },
    //             {
    //                 name: 'Khakim Arekelyan',
    //                 date: "1 June 2024",
    //                 rating: 5,
    //                 description: "EEEEE Vashe chotkiy eee kursang kozing kuvonadi borku, u know ? ",
    //             },
    //         ],

    //     },
    //     {
    //         id: 2,
    //         img: ['https://www.net-a-porter.com/variants/images/1647597349418943/in/w920_a3-4_q60.jpg', 'https://www.net-a-porter.com/variants/images/1647597349418943/ou/w920_a3-4_q60.jpg', 'https://www.net-a-porter.com/variants/images/1647597349418943/cu/w920_a3-4_q60.jpg',],
    //         title: 'YVONNE LÉON',
    //         price: 2320,
    //         discount: 0,
    //         SKU: 12,
    //         quantity: 1,
    //         isInCard: false,
    //         IsFavorite: false,
    //         category: ['Fashion', 'Style'],
    //         desc: "Dainty and elegant, Yvonne Léon's earrings are designed to look like two hoops stacked perfectly together. They're handcrafted from 9-karat yellow and white gold, respectively, and dusted with 0.60-carats of sparkling diamonds.",
    //         additional: {
    //             Length: "1.6cm",
    //             Width: "1.6 cm",
    //             Dimentions: "15 x 10 x 1 cm",
    //             Colours: "Gold",
    //             Material: "Gold",

    //         },
    //         reviews: [
    //             {
    //                 name: 'Scarlet withch',
    //                 date: "6 May 2024",
    //                 rating: 3,
    //                 description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
    //             },
    //             {
    //                 name: 'Khakim Arekelyan',
    //                 date: "1 June 2024",
    //                 rating: 5,
    //                 description: "EEEEE Vashe chotkiy eee kursang kozing kuvonadi borku, u know ? ",
    //             },
    //         ],

    //     },
    //     {
    //         id: 3,
    //         img: ['https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/cf/P00899159.jpg', 'https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/cf/P00899159_d1.jpg', 'https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/cf/P00899159_d2.jpg', 'https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/cf/P00899159_d5.jpg', 'https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/cf/P00899159.jpg'],
    //         title: 'Dolce&Gabbana',
    //         price: 505,
    //         discount: 0,
    //         SKU: 12,
    //         quantity: 0,
    //         isInCard: false,
    //         IsFavorite: false,
    //         category: ['Fashion', 'Style'],
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ",
    //         additional: {
    //             Length: "8cm-3",
    //             Width: "4cm-1.5",
    //             Dimentions: "15 x 10 x 1 cm",
    //             Colours: "Black, Browns, White",
    //             Material: "brass",

    //         },
    //         reviews: [
    //             {
    //                 name: 'Scarlet withch',
    //                 date: "6 May 2024",
    //                 rating: 3,
    //                 description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
    //             },
    //             {
    //                 name: 'Khakim Arekelyan',
    //                 date: "1 June 2024",
    //                 rating: 5,
    //                 description: "EEEEE Vashe chotkiy eee kursang kozing kuvonadi borku, u know ? ",
    //             },
    //         ],

    //     },
    //     {
    //         id: 4,
    //         img: ['https://www.net-a-porter.com/variants/images/1647597344080522/in/w920_a3-4_q60.jpg', 'https://www.net-a-porter.com/variants/images/1647597344080522/ou/w2000_a3-4_q60.jpg', 'https://www.net-a-porter.com/variants/images/1647597344080522/bk/w920_a3-4_q60.jpg', 'https://www.net-a-porter.com/variants/images/1647597344080522/e2/w920_a3-4_q60.jpg', 'https://cache.net-a-porter.com/variants/videos/1647597344080522/detail.mp4'],
    //         title: 'MARIE LICHTENBERG',
    //         price: 3250,
    //         discount: 0,
    //         SKU: 12,
    //         quantity: 12,
    //         isInCard: false,
    //         IsFavorite: false,
    //         category: ['Fashion', 'Style'],
    //         desc: "Marie Lichtenberg's earring calls to mind the intricate details of 'NYC' architecture. Handmade from 18-karat gold, it's inlaid with 0.26-carats of diamonds and has a geometric hoop shape etched to depict a star on both sides. Mix your metals by wearing the white gold version in your opposite ear.",
    //         additional: {
    //             Length: "8cm-3",
    //             Width: "0.3cm",
    //             Dimentions: "15 x 10 x 1 cm",
    //             Colours: "Gold",
    //             Material: "brass",

    //         },
    //         reviews: [
    //             {
    //                 name: 'Scarlet withch',
    //                 date: "6 May 2024",
    //                 rating: 3,
    //                 description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
    //             },
    //             {
    //                 name: 'Khakim Arekelyan',
    //                 date: "1 June 2024",
    //                 rating: 5,
    //                 description: "EEEEE Vashe chotkiy eee kursang kozing kuvonadi borku, u know ? ",
    //             },
    //         ],

    //     },
    //     {
    //         id: 5,
    //         img: ['https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/8d/P00948468.jpg', 'https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/8d/P00948468_d1.jpg', 'https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/8d/P00948468_d2.jpg', 'https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/8d/P00948468_d5.jpg',],
    //         title: 'Jil Sander',
    //         price: 715,
    //         discount: 0,
    //         SKU: 12,
    //         quantity: 12,
    //         isInCard: false,
    //         IsFavorite: false,
    //         category: ['Fashion', 'Style'],
    //         desc: "Marie Lichtenberg's earring calls to mind the intricate details of 'NYC' architecture. Handmade from 18-karat gold, it's inlaid with 0.26-carats of diamonds and has a geometric hoop shape etched to depict a star on both sides. Mix your metals by wearing the white gold version in your opposite ear.",
    //         additional: {
    //             Length: "4.5cm-2",
    //             Width: "1.7cm-0.5",
    //             Dimentions: "15 x 10 x 1 cm",
    //             Colours: "Gold",
    //             Material: "brass",

    //         },
    //         reviews: [
    //             {
    //                 name: 'Scarlet withch',
    //                 date: "6 May 2024",
    //                 rating: 3,
    //                 description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
    //             },
    //             {
    //                 name: 'Khakim Arekelyan',
    //                 date: "1 June 2024",
    //                 rating: 5,
    //                 description: "EEEEE Vashe chotkiy eee kursang kozing kuvonadi borku, u know ? ",
    //             },
    //         ],

    //     },
    //     {
    //         id: 6,
    //         img: ['https://www.net-a-porter.com/variants/images/1647597348280226/in/w920_a3-4_q60.jpg', 'https://www.net-a-porter.com/variants/images/1647597348280226/ou/w2000_a3-4_q60.jpg', 'https://www.net-a-porter.com/variants/images/1647597348280226/bk/w920_a3-4_q60.jpg',],
    //         title: 'JENNA BLAKE',
    //         price: 2675,
    //         discount: 0,
    //         SKU: 12,
    //         quantity: 12,
    //         isInCard: false,
    //         IsFavorite: false,
    //         category: ['Fashion', 'Style'],
    //         desc: "Jenna Blake's earrings are hand-sculpted from polished 18-karat gold in the shape of the brand's signature 'Mariner Link'. It's threaded with a curved bar that's dusted with 0.75-carats of shimmering diamonds. Wear yours day or night.",
    //         additional: {
    //             Length: "1.5cm",
    //             Width: "0.5cm",
    //             Dimentions: "15 x 10 x 1 cm",
    //             Colours: "Gold",
    //             Material: "Gold",

    //         },
    //         reviews: [
    //             {
    //                 name: 'Scarlet withch',
    //                 date: "6 May 2024",
    //                 rating: 3,
    //                 description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
    //             },
    //             {
    //                 name: 'Khakim Arekelyan',
    //                 date: "1 June 2024",
    //                 rating: 5,
    //                 description: "EEEEE Vashe chotkiy eee kursang kozing kuvonadi borku, u know ? ",
    //             },
    //         ],

    //     },





    // ])

    const products = ref([])
    
    /* в пустой массив products внутри просто хранит axios фунцию fetch. А fetch возвращает нам ответ response */ 
    let fetch_product = async () => products.value = await fetch('/shoppe_array')    
    fetch_product()

    
    
    /* мы в axios ednpoint = к shoppe_array и ты где модешь угодно использовать это меняя название */
    // await fetch('/shoppe_array')
    
    return { products }
})
