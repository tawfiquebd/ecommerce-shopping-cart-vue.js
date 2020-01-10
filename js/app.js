new Vue({
    el: '#app',
    methods: {
        addProductToCart: function(product){
            this.cart.items.push({
                product:product,
                quantity:1,

            });
            product.inStock--;
        },
        checkOut: function(){
            if(confirm('Are You Sure To Buy This Product?')){
                return this.cart.items = [] ;
            }
        },
        inCreaseCartQuantity:function(cartItem){
            cartItem.product.inStock--;
            var total = cartItem.quantity++;
        },
        deCreaseCartQuantity:function(cartItem){
            cartItem.product.inStock++;
            cartItem.quantity--;
        },
        
        removeItem: function(index,num){
            // alert(num);

            // this.cart.items.splice(index, num+1);
            
            this.cart.items.splice(num,1);
            // this.cart.items.splice(num);
            
        },
    },
    computed: {
        // Apply for logical operator/Expression , like + - * / , increment decrement er jonno computed method use kora hoy . 
        cartTotal: function(){
            var total = 0;
            this.cart.items.forEach(function(item){
                total += item.quantity * item.product.price;
            });
            return total;
        },
        taxAmount: function(){
            return ((this.cartTotal * 5) / 100);
        },
        grandTotal: function(){
            return this.cartTotal + this.taxAmount;
        },
    },
    data: {
        isShowingCart: false,
        
        cart:{
            items: []
        },
        products: [
            
            {
                id: 1,
                name: 'MacBook Pro (15 inch)',
                description: 'This laptop has a super crisp Retina display. Yes, we know that it\'s overpriced...',
                price: 2999,
                inStock: 50
            },
            {
                id: 2,
                name: 'Samsung Galaxy Note 7',
                description: 'Unlike the overpriced MacBook Pro, we\'re selling this one a bit cheap, as we heard it might explode...',
                price: 299,
                inStock: 755
            },
            {
                id: 3,
                name: 'HP Officejet 5740 e-All-in-One-printer',
                description: 'This one might not last for so long, but hey, printers never work anyways, right?',
                price: 149,
                inStock: 5
            },
            {
                id: 4,
                name: 'iPhone 7 cover',
                description: 'Having problems keeping a hold of that phone, huh? Ever considered not dropping it in the first place?',
                price: 49,
                inStock: 42
            },
            {
                id: 5,
                name: 'iPad Pro (9.7 inch)',
                description: 'We heard it\'s supposed to be pretty good. At least that\'s what people say.',
                price: 599,
                inStock: 0
            },
            {
                id: 6,
                name: 'OnePlus 3 cover',
                description: 'Does your phone spend most of its time on the ground? This cheap piece of plastic is the solution!',
                price: 19,
                inStock: 81
            }
        ]
    }
});