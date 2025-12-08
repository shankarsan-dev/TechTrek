// import { DollarSign } from "lucide-react";
// import { useState } from "react";

// const OrganizerTicketForm = ({ onChange }) => {
//   const [tickets, setTickets] = useState([
//     { name: "", price: "", quantity: "", description: "" },
//   ]);

// //   const handleChange = (index, field, value) => {
// //     const updatedTickets = [...tickets];
// //     updatedTickets[index][field] = value;
// //     setTickets(updatedTickets);
// //   };
// const handleChange = (index, field, value) => {
//   const updatedTickets = [...tickets];
//   updatedTickets[index][field] = value;
//   setTickets(updatedTickets);
//   onChange?.(updatedTickets); // automatically pass to parent
// };

//   const handleAddTicket = () => {
//     setTickets([
//       ...tickets,
//       { name: "", price: "", quantity: "", description: "" },
//     ]);
//   };

//   const handleRemoveTicket = (index) => {
//     const updatedTickets = tickets.filter((_, i) => i !== index);
//     setTickets(updatedTickets);
//   };

//   const handleSave = () => {
//     const filtered = tickets.filter(
//       (ticket) => ticket.name && ticket.price && ticket.quantity
//     );
//     onSave(filtered);
//   };

//   return (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold">Ticket Categories</h2>
//       {tickets.map((ticket, index) => (
//         <div
//   key={index}
//   className="border border-gray-300 rounded-lg p-4 space-y-4 bg-white shadow-sm"
// >
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-1">
//         Ticket Name
//       </label>
//       <input
//         type="text"
//         value={ticket.name}
//         onChange={(e) => handleChange(index, "name", e.target.value)}
//         placeholder="General, VIP, Student..."
//         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//       />
//     </div>

//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
//         <DollarSign className="w-4 h-4 mr-1" />
//         Price
//       </label>
//       <input
//         type="number"
//         value={ticket.price}
//         onChange={(e) => handleChange(index, "price", e.target.value)}
//         placeholder="0.00"
//         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//         min="0"
//         step="0.01"
//       />
//     </div>

//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-1">
//         Quantity
//       </label>
//       <input
//         type="number"
//         value={ticket.quantity}
//         onChange={(e) => handleChange(index, "quantity", e.target.value)}
//         placeholder="Number of tickets available"
//         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//         min="1"
//       />
//     </div>

//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-1">
//         Service Description
//       </label>
//       <input
//         type="text"
//         value={ticket.description}
//         onChange={(e) => handleChange(index, "description", e.target.value)}
//         placeholder="Includes lunch, reserved seating, etc."
//         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//       />
//     </div>
//   </div>

//   <div className="text-right">
//     {tickets.length > 1 && (
//       <button
//         type="button"
//         onClick={() => handleRemoveTicket(index)}
//         className="text-red-600 text-sm hover:underline"
//       >
//         Remove Ticket
//       </button>
//     )}
//   </div>
// </div>

//       ))}

//       <div className="flex justify-between items-center">
//         <button
//           type="button"
//           onClick={handleAddTicket}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Add Ticket
//         </button>

//         <button
//           type="button"
//           onClick={handleSave}
//           className="bg-green-600 text-white px-4 py-2 rounded"
//         >
//           Save Tickets
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OrganizerTicketForm;
