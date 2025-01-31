export class Order {
  // how identifier the client within of order?
  public customerDocument: string; 

  /* 
    thiking that they are presence of rule 
    buginess saying that a client can or not
    exists in database. The customerDocument (reference) 
    not if import with the rule.
  */
  
  private total: number;
  private createdAt: Date;

  constructor(total: number, customerDocument: string) {
    this.total = total;
    this.createdAt = new Date();
    this.customerDocument = customerDocument;
  }
}