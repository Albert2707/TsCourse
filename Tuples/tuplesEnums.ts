/*

Enumns allow us to define a ser of named constants. We can give these constants numeric or string value

There's quite a few options when it comes to enums
*/

enum OrderStatus {
  PENDING, //0
  SHIPPED, //1
  DELIVERED, //2
  RETURNED, //3
}
const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);

enum ArrowKey {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}
