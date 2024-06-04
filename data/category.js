const categories = [
    {
        name: 'Men',
        items: [
            { imgSrc: 'images/category/mens/tees & polos.jpg', price: 199, type: 'Tees & Polos' },
            { imgSrc: 'images/category/mens/bottom-wear.jpg', price: 299, type: 'Bottoms' },
             { imgSrc: 'images/category/mens/trackpants.jpg', price: 399, type: 'Trackpants' },
             { imgSrc: 'images/category/mens/sportswear.jpg', price: 499, type: 'Sportswear' },
            { imgSrc: 'images/category/mens/shirts.jpg', price: 599, type: 'Shirts' },
        ]
    },
    {
        name: 'Women',
        items: [
            { imgSrc: 'images/category/womens/tops.jpg', price: 199, type: 'Top wear' },
            { imgSrc: 'images/category/womens/kurties.jpg', price: 299, type: 'Kurties' },
            { imgSrc: 'images/category/womens/dress.jpg', price: 399, type: 'Dresses' },
            { imgSrc: 'images/category/womens/sportswear.jpg', price: 499, type: 'Sportswear' },
            { imgSrc: 'images/category/womens/sarees.jpg', price: 599, type: 'Sarees' },
            
           
        ]
    },
    {
        name: 'Kids',
        items: [
            { imgSrc: 'images/category/kids/tops & tees.jpg', price: 199, type: 'Top & Tees' },
            { imgSrc: 'images/category/kids/dress.jpg', price: 499, type: 'Dresses' },
            { imgSrc: 'images/category/kids/pants.jpg', price: 399, type: 'Pants' },
            { imgSrc: 'images/category/kids/shirts.jpg', price: 399, type: 'Shirts' },
            { imgSrc: 'images/category/kids/indian wear.jpg', price: 599, type: 'Indian Wear' },
        ]
    },
    {
        name: 'Home',
        items: [
            { imgSrc: 'images/category/home/living room.jpg', price: 399, type: 'Living Room' },
            { imgSrc: 'images/category/home/kitchen.jpg', price: 299, type: 'Kitchen' },
            { imgSrc: 'images/category/home/bathroom.jpg', price: 299, type: 'Bathroom' },
            { imgSrc: 'images/category/home/bedroom.jpg', price: 399, type: 'Bedroom' },
            { imgSrc: 'images/category/home/garden.jpg', price: 199, type: 'Garden' },
        ]
    }
];

const clothesSectionData = [
    { selector: '.tees', type: mens_tees },
    { selector: '.longss', type: mens_longss },
    { selector: '.formals', type: mens_formals },
    { selector: '.menssportswear', type: mens_sportswear },
    { selector: '.trousers', type: mens_trousers },
    { selector: '.casuals', type: mens_casuals },
    { selector: '.summerdresses', type: womens_summerdresses },
    { selector: '.kurties', type: womens_kurties},
    { selector: '.womenstops', type: womens_tops },
    { selector: '.womenssportswear', type: womens_sportswear },
    { selector: '.wpartyweardresses', type: womens_partyweardresses },
    { selector: '.weddingsarees', type: womens_weddingsarees },
    { selector: '.bottoms', type: womens_bottoms },
    { selector: '.organzasarees', type: womens_organzasarees },
    { selector: '.festivekurtasets', type: womens_festivekurtasets },
    { selector: '.boysclothingset', type:kids_BCS  },
    { selector: '.dresses', type:kids_dresses  },
    { selector: '.festiveseason', type:kids_festivewear  },
    { selector: '.jeans', type:kids_jeans  },
    { selector: '.kurtadhotipants', type:kids_kurtadhotipants },
    { selector: '.partywear', type:kids_partywear },
    { selector: '.pants', type:kids_pants },
    { selector: '.shirts', type:kids_shirts },
    { selector: '.kidstops', type:kids_tops },   
    { selector: '.livingroom', type: home_livingroom },
    { selector: '.bedroom', type: home_bedroom },
    { selector: '.bathroom', type: home_bathroom },
    { selector: '.kitchen', type: home_kitchen },
    { selector: '.garden', type: home_garden },
    
];

const homepageBlockSection= [
    { selector: '.blocks', trends: fusiontrends },
    { selector: '.mens', trends: mens_trends },
    { selector: '.womens', trends: womens_trends },
    { selector: '.kids', trends: kids_trends },
    { selector: '.home', trends: home_trends }
];