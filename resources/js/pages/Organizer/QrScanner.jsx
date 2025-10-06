// // "use client"
// // import { Html5Qrcode } from "html5-qrcode";
// // import { useEffect, useRef, useState } from "react";
// // import { Button } from "../../components/Layout/ui/button";

// // const QrScanner = () => {
// //   const [scannerOpen, setScannerOpen] = useState(false);
// //   const scannerRef = useRef(null);

// //   useEffect(() => {
// //     let html5QrcodeScanner;

// //     if (scannerOpen && scannerRef.current) {
// //       html5QrcodeScanner = new Html5Qrcode("qr-reader");

// //       html5QrcodeScanner.start(
// //         { facingMode: "environment" },
// //         {
// //           fps: 10,
// //           qrbox: 250,
// //         },
// //         (decodedText) => {
// //           console.log("Scanned QR:", decodedText);

// //           if (decodedText === "4a99ad17-50c0-4f23-b896-138f6683d89f") {
// //             alert("Success! QR code matched.");
// //             html5QrcodeScanner.stop();
// //             setScannerOpen(false);
// //           } else {
// //             alert("QR code invalid!");
// //           }
// //         },
// //         (errorMessage) => {
// //           // Handle scan errors if needed
// //           console.warn("QR scan error:", errorMessage);
// //         }
// //       ).catch((err) => console.error("Unable to start scanning:", err));
// //     }

// //     return () => {
// //       if (html5QrcodeScanner) {
// //         html5QrcodeScanner.stop().catch(() => {});
// //       }
// //     };
// //   }, [scannerOpen]);

// //   return (
// //     <div className="p-6">
// //       <Button onClick={() => setScannerOpen(true)}>Open QR Scanner</Button>

// //       {scannerOpen && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// //           <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center">
// //             <h2 className="text-xl font-semibold mb-4">Scan QR Code</h2>
// //             <div id="qr-reader" ref={scannerRef} className="w-full h-64" />
// //             <button
// //               onClick={() => setScannerOpen(false)}
// //               className="mt-4 px-4 py-2 bg-gray-200 rounded-lg"
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default QrScanner;
// // "use client";
// // import { Html5Qrcode } from "html5-qrcode";
// // import { useEffect, useRef, useState } from "react";
// // import axios from "axios";
// // import { Button } from "../../components/Layout/ui/button";

// // const QrScanner = () => {
// //   const [scannerOpen, setScannerOpen] = useState(false);
// //   const [scanResult, setScanResult] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const scannerRef = useRef(null);

// //   useEffect(() => {
// //     let html5QrcodeScanner;

// //     if (scannerOpen && scannerRef.current) {
// //       html5QrcodeScanner = new Html5Qrcode("qr-reader");

// //       html5QrcodeScanner
// //         .start(
// //           { facingMode: "environment" },
// //           { fps: 10, qrbox: 250 },
// //           async (decodedText) => {
// //             console.log("Scanned QR:", decodedText);
// //             setLoading(true);

// //             try {
// //               const res = await axios.post("/api/verify-qr", {
// //                 qr_code: decodedText,
// //               });

// //               setScanResult(res.data.data);
// //             } catch (err) {
// //               console.error(err);
// //               alert("Invalid or inactive ticket.");
// //             } finally {
// //               html5QrcodeScanner.stop();
// //               setScannerOpen(false);
// //               setLoading(false);
// //             }
// //           },
// //           (errorMessage) => {
// //             console.warn("QR scan error:", errorMessage);
// //           }
// //         )
// //         .catch((err) => console.error("Unable to start scanning:", err));
// //     }

// //     return () => {
// //       if (html5QrcodeScanner) {
// //         html5QrcodeScanner.stop().catch(() => {});
// //       }
// //     };
// //   }, [scannerOpen]);

// //   const handleCheckIn = async () => {
// //     try {
// //       const res = await axios.post("/api/check-in", {
// //         qr_code: scanResult.booking.qr_code,
// //       });
// //       alert(res.data.message);
// //       setScanResult(null);
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Check-in failed");
// //     }
// //   };

// //   return (
// //     <div className="p-6">
// //       <Button onClick={() => setScannerOpen(true)}>Open QR Scanner</Button>

// //       {scannerOpen && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// //           <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center">
// //             <h2 className="text-xl font-semibold mb-4">Scan QR Code</h2>
// //             <div id="qr-reader" ref={scannerRef} className="w-full h-64" />
// //             <button
// //               onClick={() => setScannerOpen(false)}
// //               className="mt-4 px-4 py-2 bg-gray-200 rounded-lg"
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       {/* Show scan result */}
// //       {scanResult && (
// //         <div className="mt-6 bg-white shadow-md p-4 rounded-xl">
// //           <h3 className="text-lg font-semibold mb-2 text-green-700">
// //             ✅ Ticket Verified
// //           </h3>

// //           <div className="text-gray-700 space-y-1">
// //             <p>
// //               <strong>User:</strong> {scanResult.user.name} (
// //               {scanResult.user.email})
// //             </p>
// //             <p>
// //               <strong>Event:</strong> {scanResult.event.title}
// //             </p>
// //             <p>
// //               <strong>Location:</strong> {scanResult.event.location}
// //             </p>
// //             <p>
// //               <strong>Ticket:</strong> {scanResult.ticket.name} — Rs.
// //               {scanResult.ticket.price}
// //             </p>
// //             <p>
// //               <strong>Status:</strong> {scanResult.booking.status}
// //             </p>
// //           </div>

// //           <div className="mt-4 flex gap-3">
// //             <Button onClick={handleCheckIn}>Check In</Button>
// //             <Button
// //               variant="outline"
// //               onClick={() => setScanResult(null)}
// //             >
// //               Close
// //             </Button>
// //           </div>
// //         </div>
// //       )}

// //       {loading && <p className="mt-4 text-gray-600">Verifying QR...</p>}
// //     </div>
// //   );
// // };

// // export default QrScanner;
// "use client";

// import axios from "axios";
// import { Html5Qrcode } from "html5-qrcode";
// import { useEffect, useRef, useState } from "react";
// import { Button } from "../../components/Layout/ui/button";

// const QrScanner = () => {
//   const [scannerOpen, setScannerOpen] = useState(false);
//   const [scanResult, setScanResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const scannerRef = useRef(null);

//   useEffect(() => {
//     let html5QrcodeScanner;

//     if (scannerOpen && scannerRef.current) {
//       html5QrcodeScanner = new Html5Qrcode("qr-reader");

//       html5QrcodeScanner
//         .start(
//           { facingMode: "environment" },
//           { fps: 10, qrbox: 250 },
//           async (decodedText) => {
//             setLoading(true);
//             setError(null);

//             try {
//               // Send scanned QR to backend
//               const res = await axios.post("http://localhost:8000/api/verify-qr", {
//                 qr_code: decodedText,
//               });

//               const data = res.data.data;

//               if (data.booking.checked_in) {
//                 setError("Ticket already checked in!");
//               }

//               setScanResult(data);
//             } catch (err) {
//               console.error(err);
//               setError(err.response?.data?.message || "Invalid or inactive ticket.");
//               setScanResult(null);
//             } finally {
//               setLoading(false);
//             }
//           },
//           (errorMessage) => {
//             console.warn("QR scan error:", errorMessage);
//           }
//         )
//         .catch((err) => console.error("Unable to start scanning:", err));
//     }

//     return () => {
//       if (html5QrcodeScanner) {
//         html5QrcodeScanner.stop().catch(() => {});
//       }
//     };
//   }, [scannerOpen]);

//   const handleCheckIn = async () => {
//     if (!scanResult) return;

//     try {
//       setLoading(true);
//       const res = await axios.post("http://localhost:8000/api/verify-qr-code", {
//         qr_code: scanResult.booking.qr_code,
//       });

//       alert(res.data.message);

//       // Update local state
//       setScanResult({ ...scanResult, booking: { ...scanResult.booking, checked_in: true } });
//     } catch (err) {
//       alert(err.response?.data?.message || "Check-in failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6">
//       <Button onClick={() => setScannerOpen(true)}>Open QR Scanner</Button>

//       {scannerOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center">
//             <h2 className="text-xl font-semibold mb-4">Scan QR Code</h2>
//             <div id="qr-reader" ref={scannerRef} className="w-full h-64" />
//             <Button variant="outline" onClick={() => setScannerOpen(false)} className="mt-4">
//               Close
//             </Button>
//           </div>
//         </div>
//       )}

//       {loading && <p className="mt-4 text-gray-600">Verifying QR...</p>}

//       {error && <p className="mt-4 text-red-600">{error}</p>}

//       {scanResult && !error && (
//         <div className="mt-6 bg-white shadow-md p-4 rounded-xl">
//           <h3 className="text-lg font-semibold mb-2 text-green-700">
//             ✅ Ticket Verified
//           </h3>

//           <div className="text-gray-700 space-y-1">
//             <p>
//               <strong>User:</strong> {scanResult.user.name} ({scanResult.user.email})
//             </p>
//             <p>
//               <strong>Event:</strong> {scanResult.event.title}
//             </p>
//             <p>
//               <strong>Location:</strong> {scanResult.event.location || "N/A"}
//             </p>
//             <p>
//               <strong>Ticket:</strong> {scanResult.ticket.name || "General"} — Rs. {scanResult.ticket.price}
//             </p>
//             <p>
//               <strong>Status:</strong> {scanResult.booking.status}
//             </p>
//             <p>
//               <strong>Checked In:</strong> {scanResult.booking.checked_in ? "Yes" : "No"}
//             </p>
//           </div>

//           {!scanResult.booking.checked_in && (
//             <div className="mt-4 flex gap-3">
//               <Button onClick={handleCheckIn}>Check In</Button>
//               <Button variant="outline" onClick={() => setScanResult(null)}>
//                 Close
//               </Button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default QrScanner;
// "use client";
// import { Button } from "@/components/Layout/ui/button";
// import axios from "axios";
// import { Html5Qrcode } from "html5-qrcode";
// import { useEffect, useRef, useState } from "react";

// export default function QrScanner() {
//   const [scannerActive, setScannerActive] = useState(false);
//   const [scanResult, setScanResult] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const scannerRef = useRef(null);
//   const html5QrcodeScanner = useRef(null);
//   const scannerRunning = useRef(false); // ✅ track if running

//   useEffect(() => {
//     if (scannerActive && scannerRef.current) {
//       html5QrcodeScanner.current = new Html5Qrcode("qr-reader");

//       html5QrcodeScanner.current
//         .start(
//           { facingMode: "environment" },
//           { fps: 10, qrbox: 250 },
//           async (decodedText) => {
//             setLoading(true);

//             try {
//               const res = await axios.post("http://localhost:8000/api/verify-qr", {
//                 qr_code: decodedText,
//               });

//               setScanResult(res.data.data);
//               setError(null);
//             } catch (err) {
//               setError(err.response?.data?.message || "Invalid or inactive ticket.");
//               setScanResult(null);
//             } finally {
//               setLoading(false);
//               if (scannerRunning.current) {
//                 await html5QrcodeScanner.current.stop().catch(() => {});
//                 scannerRunning.current = false; // ✅ mark as stopped
//               }
//               setScannerActive(false);
//             }
//           },
//           (errorMessage) => console.warn("QR scan error:", errorMessage)
//         )
//         .then(() => {
//           scannerRunning.current = true; // ✅ mark as running
//         })
//         .catch((err) => console.error("Unable to start scanning:", err));
//     }

//     return () => {
//       if (html5QrcodeScanner.current && scannerRunning.current) {
//         html5QrcodeScanner.current.stop().catch(() => {});
//         scannerRunning.current = false;
//       }
//     };
//   }, [scannerActive]);

//   const handleCheckIn = async () => {
//     if (!scanResult?.booking?.id) return;

//     try {
//       setLoading(true);
//       const res = await axios.put(
//         `http://localhost:8000/api/bookings/${scanResult.booking.id}/check-in`
//       );
//       alert(res.data.message || "Checked in successfully!");
//       setScanResult({ ...scanResult, booking: { ...scanResult.booking, checked_in: true } });
//     } catch (err) {
//       alert(err.response?.data?.message || "Check-in failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       {!scannerActive && !scanResult && !error && (
//         <Button onClick={() => setScannerActive(true)}>Open QR Scanner</Button>
//       )}

//       {scannerActive && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center z-50">
//           <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
//             <h2 className="text-xl font-semibold mb-4">Scan Ticket QR</h2>
//             <div id="qr-reader" ref={scannerRef} className="w-full h-64 border rounded-lg" />
//             <Button
//               variant="outline"
//               onClick={async () => {
//                 if (scannerRunning.current) {
//                   await html5QrcodeScanner.current.stop().catch(() => {});
//                   scannerRunning.current = false;
//                 }
//                 setScannerActive(false);
//               }}
//               className="mt-4"
//             >
//               Close
//             </Button>
//           </div>
//         </div>
//       )}

//       {loading && <p className="mt-4 text-gray-600">Verifying QR...</p>}

//       {scanResult && (
//         <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md mt-8 text-center">
//           <h3 className="text-2xl font-semibold text-green-600 mb-4">✅ Ticket Verified</h3>
//           <p>
//             <strong>User:</strong> {scanResult.user.name} ({scanResult.user.email})
//           </p>
//           <p>
//             <strong>Event:</strong> {scanResult.event.title}
//           </p>
//           <p>
//             <strong>Location:</strong> {scanResult.event.location}
//           </p>
//           <p>
//             <strong>Ticket:</strong> {scanResult.ticket.name} — Rs. {scanResult.ticket.price}
//           </p>
//           <p>
//             <strong>Status:</strong> {scanResult.booking.status}
//           </p>
//           <p>
//             <strong>Checked In:</strong> {scanResult.booking.checked_in ? "Yes" : "No"}
//           </p>

//           <div className="flex justify-center gap-3 mt-5">
//             {!scanResult.booking.checked_in && (
//               <Button onClick={handleCheckIn} className="bg-green-600 text-white">
//                 Check In
//               </Button>
//             )}
//             <Button variant="outline" onClick={() => setScanResult(null)}>
//               Close
//             </Button>
//           </div>
//         </div>
//       )}

//       {error && (
//         <div className="bg-red-100 border border-red-300 text-red-700 rounded-xl p-5 mt-8 text-center">
//           <h3 className="text-lg font-semibold mb-2">❌ Verification Failed</h3>
//           <p>{error}</p>
//           <Button variant="outline" className="mt-4" onClick={() => setError(null)}>
//             Try Again
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }
// "use client";

// import { Button } from "@/components/Layout/ui/button";
// import axios from "axios";
// import { AnimatePresence, motion } from "framer-motion";
// import { Howl } from "howler";
// import { Html5Qrcode } from "html5-qrcode";
// import { useEffect, useRef, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function QrScanner() {
//   const [scannerActive, setScannerActive] = useState(false);
//   const [scanResult, setScanResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const scannerRef = useRef(null);
//   const html5QrcodeScanner = useRef(null);
//   const scannerRunning = useRef(false);

//   // Sounds
//   const successSound = new Howl({ src: ["/sounds/success.mp3"] });
//   const errorSound = new Howl({ src: ["/sounds/error.mp3"] });

//   useEffect(() => {
//     if (scannerActive && scannerRef.current) {
//       html5QrcodeScanner.current = new Html5Qrcode("qr-reader");

//       html5QrcodeScanner.current
//         .start(
//           { facingMode: "environment" },
//           { fps: 10, qrbox: 250 },
//           async (decodedText) => {
//             setLoading(true);

//             try {
//               const res = await axios.post("http://localhost:8000/api/verify-qr", {
//                 qr_code: decodedText,
//               });

//               const data = res.data.data;
//               setScanResult(data);
//               toast.success("Ticket Verified! 🎉");
//               successSound.play();
//             } catch (err) {
//               setScanResult(null);
//               toast.error(err.response?.data?.message || "Invalid or inactive ticket ❌");
//               errorSound.play();
//             } finally {
//               setLoading(false);
//               if (scannerRunning.current) {
//                 await html5QrcodeScanner.current.stop().catch(() => {});
//                 scannerRunning.current = false;
//               }
//               setScannerActive(false);
//             }
//           },
//           (errorMessage) => console.warn("QR scan error:", errorMessage)
//         )
//         .then(() => {
//           scannerRunning.current = true;
//         })
//         .catch((err) => console.error("Unable to start scanning:", err));
//     }

//     return () => {
//       if (html5QrcodeScanner.current && scannerRunning.current) {
//         html5QrcodeScanner.current.stop().catch(() => {});
//         scannerRunning.current = false;
//       }
//     };
//   }, [scannerActive]);

//   const handleCheckIn = async () => {
//     if (!scanResult?.booking?.id) return;

//     try {
//       setLoading(true);
//       const res = await axios.put(
//         `http://localhost:8000/api/bookings/${scanResult.booking.id}/check-in`
//       );
//       toast.success(res.data.message || "Checked in successfully! ✅");
//       successSound.play();
//       setScanResult({ ...scanResult, booking: { ...scanResult.booking, checked_in: true } });
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Check-in failed ❌");
//       errorSound.play();
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

//       {!scannerActive && !scanResult && (
//         <Button onClick={() => setScannerActive(true)}>Open QR Scanner</Button>
//       )}

//       {/* Scanner Modal */}
//       <AnimatePresence>
//         {scannerActive && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//             >
//               <h2 className="text-xl font-semibold mb-4">Scan Ticket QR</h2>
//               <div id="qr-reader" ref={scannerRef} className="w-full h-64 border rounded-lg" />
//               <Button
//                 variant="outline"
//                 onClick={async () => {
//                   if (scannerRunning.current) {
//                     await html5QrcodeScanner.current.stop().catch(() => {});
//                     scannerRunning.current = false;
//                   }
//                   setScannerActive(false);
//                 }}
//                 className="mt-4"
//               >
//                 Close
//               </Button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Scan Result Card */}
//       <AnimatePresence>
//         {scanResult && (
//           <motion.div
//             className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md mt-8 text-center"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//           >
//             <h3 className="text-2xl font-semibold text-green-600 mb-4">✅ Ticket Verified</h3>
//             <p><strong>User:</strong> {scanResult.user.name} ({scanResult.user.email})</p>
//             <p><strong>Event:</strong> {scanResult.event.title}</p>
//             <p><strong>Location:</strong> {scanResult.event.location}</p>
//             <p><strong>Ticket:</strong> {scanResult.ticket.name} — Rs. {scanResult.ticket.price}</p>
//             <p><strong>Status:</strong> {scanResult.booking.status}</p>
//             <p><strong>Checked In:</strong> {scanResult.booking.checked_in ? "Yes" : "No"}</p>

//             <div className="flex justify-center gap-3 mt-5">
//               {!scanResult.booking.checked_in && (
//                 <Button onClick={handleCheckIn} className="bg-green-600 text-white">
//                   Check In
//                 </Button>
//               )}
//               <Button variant="outline" onClick={() => setScanResult(null)}>Close</Button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {loading && <p className="mt-4 text-gray-600">Processing...</p>}
//     </div>
//   );
// }
"use client";

import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { Howl } from "howler";
import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import { Button } from "../../components/Layout/ui/button";

const QrScanner = () => {
  const [scannerOpen, setScannerOpen] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [processingScan, setProcessingScan] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [flash, setFlash] = useState(false);
  const [shakeError, setShakeError] = useState(false);
  const scannerRef = useRef(null);

  // Sounds
  const successSound = new Howl({ src: ["/sounds/success.mp3"] });
  const errorSound = new Howl({ src: ["/sounds/error.mp3"] });
  const beepSound = new Howl({ src: ["/sounds/beep.mp3"] });

  useEffect(() => {
    let html5QrcodeScanner;

    const startScanner = async () => {
      if (!scannerOpen || !scannerRef.current) return;

      html5QrcodeScanner = new Html5Qrcode("qr-reader");

      try {
        await html5QrcodeScanner.start(
          { facingMode: "environment" },
          { fps: 10, qrbox: 250 },
          async (decodedText) => {
            if (processingScan) return;
            setProcessingScan(true);

            // Play beep on every scan attempt
            beepSound.play();

            // Camera flash effect
            setFlash(true);
            setTimeout(() => setFlash(false), 100);

            try {
              if (html5QrcodeScanner && html5QrcodeScanner.getState() === 2) {
                await html5QrcodeScanner.stop();
              }
              setScannerOpen(false);

              setLoading(true);
              setError(null);

              const res = await axios.post(
                "http://localhost:8000/api/verify-qr",
                { qr_code: decodedText }
              );

              const data = res.data.data;

              if (data.booking.checked_in) {
                setError("Ticket already checked in!");
                errorSound.play();
                setShakeError(true);
                setTimeout(() => setShakeError(false), 500);
                setScanResult(null);
              } else {
                setScanResult(data);
                successSound.play();
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 3000);
              }
            } catch (err) {
              console.error(err);
              setError(
                err.response?.data?.message || "Invalid or inactive ticket."
              );
              errorSound.play();
              setShakeError(true);
              setTimeout(() => setShakeError(false), 500);
              setScanResult(null);
            } finally {
              setLoading(false);
              setProcessingScan(false);
            }
          },
          (errorMessage) => {
            console.warn("QR scan error:", errorMessage);
          }
        );
      } catch (err) {
        console.error("Unable to start scanning:", err);
      }
    };

    startScanner();

    return () => {
      if (
        html5QrcodeScanner &&
        html5QrcodeScanner.getState &&
        html5QrcodeScanner.getState() === 2
      ) {
        html5QrcodeScanner.stop().catch(() => {});
      }
    };
  }, [scannerOpen, processingScan]);

  const handleCheckIn = async () => {
    if (!scanResult) return;

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8000/api/verify-qr-code", {
        qr_code: scanResult.booking.qr_code,
      });

      alert(res.data.message);
      setScanResult({
        ...scanResult,
        booking: { ...scanResult.booking, checked_in: true },
      });
    } catch (err) {
      alert(err.response?.data?.message || "Check-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 relative">
      {showConfetti && <Confetti numberOfPieces={200} />}
      {flash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-white z-50"
        />
      )}

      <Button onClick={() => setScannerOpen(true)}>Open QR Scanner</Button>

      <AnimatePresence>
        {scannerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full text-center"
            >
              <h2 className="text-xl font-semibold mb-4">Scan QR Code</h2>
              <div id="qr-reader" ref={scannerRef} className="w-full h-64" />
              <Button
                variant="outline"
                onClick={() => setScannerOpen(false)}
                className="mt-4"
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {loading && (
        <motion.p
          className="mt-4 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Verifying QR...
        </motion.p>
      )}

      {error && (
        <motion.div
          className="mt-4 text-red-600 font-semibold"
          initial={{ x: 0 }}
          animate={shakeError ? { x: [0, -10, 10, -10, 10, 0] } : { x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </motion.div>
      )}

      {scanResult && !error && (
        <motion.div
          className="mt-6 bg-white shadow-md p-4 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-lg font-semibold mb-2 text-green-700">
            ✅ Ticket Verified
          </h3>

          <div className="text-gray-700 space-y-1">
            <p>
              <strong>User:</strong> {scanResult.user.name} (
              {scanResult.user.email})
            </p>
            <p>
              <strong>Event:</strong> {scanResult.event.title}
            </p>
            <p>
              <strong>Location:</strong> {scanResult.event.location || "N/A"}
            </p>
            <p>
              <strong>Ticket:</strong> {scanResult.ticket.name || "General"} — Rs.{" "}
              {scanResult.ticket.price}
            </p>
            <p>
              <strong>Status:</strong> {scanResult.booking.status}
            </p>
            <p>
              <strong>Checked In:</strong>{" "}
              {scanResult.booking.checked_in ? "Yes" : "No"}
            </p>
          </div>

          {!scanResult.booking.checked_in && (
            <div className="mt-4 flex gap-3">
              <Button onClick={handleCheckIn}>Check In</Button>
              <Button variant="outline" onClick={() => setScanResult(null)}>
                Close
              </Button>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default QrScanner;
