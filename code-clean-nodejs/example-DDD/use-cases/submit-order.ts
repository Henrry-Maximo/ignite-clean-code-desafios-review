import { Order } from "../domain/purchases/order";

interface SubmitOrderRequest {
  customerDocument: string;
  total: number;
}

// not necessary response for work with the data of orders
// interface SubmitOrderResponse {
// }

export class SubmitOrder {
  async execute({ customerDocument, total }: SubmitOrderRequest) {
    const order = new Order(total, customerDocument);

    // Persist at database
  }
}