
<!-- SOLID -->
- SRP (Single Responsiblity Principle): at situations that there is presence of more that a function in code, i.e, at class, method, functions. Is necessary availble if the function/class/method perform more that an task, if there is the presence of `and`, a phrase connector.
- OCP (Open-Closed Principle): the somethings must will open for extension, but not must for modification. Example: if there is multiples `ifs` at code, not must will possibly write at origen.
- LSP (Liskov Substitution Principle): the class/code origen not must know the repository. Soo, if he is exchanged
for another dependency that has the same methods, ahe class origen it should still work.
- ISP (Interface Segregation Principle): in situations that has somethings similar, but that can has features or not.
Soo, is necessary use a implemetation (creation class) of methods that can will optional.
- DIP (Dependency Inversion Principle): the principle say that if must created a
function, class, etc, saying the what is will necessary, automatically for using the method or function is required import your respectives methods. 

1. Single Responsiblity Principle -> Only calculate the order
2. Open-Closed Principle -> 

<!-- billet, credit, debit -->

interface Card {
  number: number;
  cvv: number;
  expiration: number;
}

interface PaymentMethod {
  getDiscountAmount: (amount: number) => number;
}

class Billet implements PaymentMethod {
  getDiscountAmount(amount: number): number {
    return amount * 0.1;
  }
}

class Credit implements PaymentMethod, Card {
  private installments: number;

  constructor(installments: number) {
    this.installments = installments;
  }

  getDiscountAmount(amount: number): number {
    if (this.installments === 1) {
      return amount * 0.05;
    }

    if (this.installments <= 6) {
      return amount * 0.02;
    }

    return 0;
  }
}

class Debit implements PaymentMethod, Card {
getDiscountAmount(amount: number): number {
    return amount * 0.05;
  }
}

class CalculateOrderDiscount {
  private paymentMethod: PaymentMethod;

  constructor(paymentMethod: PaymentMethod) {
   this.paymentMethod = paymentMethod;
  }

  public execute(amount: number) {
    return this.paymentMethod.getDiscountAmount(amount);
  }
}

const calculateOrderDiscount = new CalculateOrderDiscount( new Credit(6) );

calculateOrderDiscount.execute(2000)


<!-- class CalculateOrderDiscount {
  public execute(amount: number,installments: number, paymentMethod: string) {
    if (paymentMethod === "billet") {
      
    }

    if (paymentMethod === "credit") {
      
    }

    if (paymentMethod === "debit") {
      return amount * 0.05;
    }

    return 0;
  }
} -->







class SubmitOrderInvoice {
  public execute() {
    // emissão da nota
  }
}

class CreateOrder {
  public execute() {
    // CalculateOrderDiscount
    // SubmitOrderInvoice
  }
}



# DDD
- Domain Drive Design (design dirigido à domínio): design of software, beforce of any development.
- 1. Exists dominions and subdominions
      - Logistics
      - Billing
      - Payment
      - Stock

- Domain Experts: 
  - Entity -> 
  - Cases of use -> actions between entity

- Experience Experts:
  - Get the **order of orders** and *emit* **bill**

----------------

User:
  - client
  - destiny
