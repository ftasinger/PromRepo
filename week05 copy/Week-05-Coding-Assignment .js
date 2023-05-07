//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
	//Use at least one array.
	//Use at least two classes.
	//Your menu should have the options to create, view, and delete elements.
   
    class Coffee {
        constructor(size, flavor, price) {
          this.size = size;
          this.flavor = flavor;
          this.price = price;
        }
     
        describe() {
          return `Your ${this.size} ${this.flavor} coffee is ${this.price}.`;
        }
      }
 
 
    class Customer{
        constructor(name) {
            this.name = name;
            this.coffeeOrders = []
        }
        addCoffeeOrder(size, flavor, price) {
            let newCoffeeOrder = new Coffee( size, flavor, price);
            this.coffeeOrders.push(newCoffeeOrder)
        }
       
        describe() {
            return `${this.name}, your ${this.coffeeOrders.length}  is ready!`;
        }
       
    }
 

    class Menu{
        constructor() {
            this.customers = [];
            this.selectedCustomer = null;

          
        }
    
        start() {
            let selection = this.showMainMenuOptions();
            while(selection != 0) {
                switch(selection){
                    case '1' :
                        this.createCustomer();
                        break;
                    case '2' :
                        this.viewCustomer();
                        break;
                    case '3' :
                        this.deleteCustomer();
                        break;
                    case '4': 
                        this.displayCustomers();
                        break;
                    default:
                            selection = 0;
                }
                selection = this.showMainMenuOptions();
            }
            alert(`Bye!`);
        }   
    
        showMainMenuOptions() {
            return window.prompt(`
            0) exit
            1) Add Customer
            2) View Customer
            3) Delete Customer
            4) Display Customers
            `);
        }
    
        showCoffeeMenuOptions(coffeeOrders) {
            let options = '0) back\n';
            for (let i = 0; i < coffeeOrders.length; i++) {
              options += `${i + 1}) ${coffeeOrders[i].describe()}\n`;
            }
            return window.prompt(options);
        }
    
        createCustomer() {
            let name = window.prompt(`What is your Name:`);
            this.customers.push(new Customer(name));
        }

        viewCustomer() {
            let index = Number(prompt('Enter the index of the customer you would like to view:'));
            if(index > -1 && index < this.customers.length) {
                this.selectedCustomer = this.customers[index];
                let description = 'Customer Name: ' + this.selectedCustomer.name + '\n';
        
                for (let i = 0; i < this.selectedCustomer.orders.length; i++) {
                    description += i + ')' + this.selectedCustomer.orders[i].describe() + '\n';
                }
        
                let selection = this.showCoffeeMenuOptions(this.selectedCustomer.orders);
                switch(selection) {
                    case '0':
                        this.selectedCustomer = null;
                        break;
                    default:
                        this.selectedCustomer.orders.splice(selection - 1, 1);
                        break;
                }
            }
        }      
    
        deleteCustomer() {
            let index = Number(prompt(`Enter the index of the Customer you would like to delete:`));
            if(index > -1 && index < this.customers.length) {
                this.customers.splice(index,1);
            }
        }
    
        displayCustomers() {
            let customerList = '';
            for (let i = 0; i < this.customers.length; i++) {
              customerList += `${i}) ${this.customers[i].name}\n`;
            }
            alert(customerList);
        }
    }
    
 let menu = new Menu();
 menu.start();
 menu.showMainMenuOptions();
 menu.showCoffeeMenuOptions();
 menu.createCustomer();
 menu.deleteCustomer();
 menu.displayCustomers();



    
  