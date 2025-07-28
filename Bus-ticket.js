// BUS Ticket
const Age = 23;
const TicketPrice = 800;
const IsStudent = true;
const IsCitizens = false;

if (Age < 10) {
  console.log("Ticket free");
} else if (Age > 10 && IsStudent == true) {
  const Discount = (TicketPrice / 100) * 50;
  const NetPrice = TicketPrice - Discount;
  console.log(NetPrice);
} else if (Age >= 60 && IsCitizens == true) {
  const Discount = (TicketPrice / 100) * 15;
  const NetPrice = TicketPrice - Discount;
  console.log(NetPrice);
} else {
  console.log("Regular ticket fare 800 tk");
}
