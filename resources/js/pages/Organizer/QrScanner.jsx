// // // // // // "use client"
// // // // // // import { Html5Qrcode } from "html5-qrcode";
// // // // // // import { useEffect, useRef, useState } from "react";
// // // // // // import { Button } from "../../components/Layout/ui/button";

// // // // // // const QrScanner = () => {
// // // // // //   const [scannerOpen, setScannerOpen] = useState(false);
// // // // // //   const scannerRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     let html5QrcodeScanner;

// // // // // //     if (scannerOpen && scannerRef.current) {
// // // // // //       html5QrcodeScanner = new Html5Qrcode("qr-reader");

// // // // // //       html5QrcodeScanner.start(
// // // // // //         { facingMode: "environment" },
// // // // // //         {
// // // // // //           fps: 10,
// // // // // //           qrbox: 250,
// // // // // //         },
// // // // // //         (decodedText) => {
// // // // // //           console.log("Scanned QR:", decodedText);

// // // // // //           if (decodedText === "4a99ad17-50c0-4f23-b896-138f6683d89f") {
// // // // // //             alert("Success! QR code matched.");
// // // // // //             html5QrcodeScanner.stop();
// // // // // //             setScannerOpen(false);
// // // // // //           } else {
// // // // // //             alert("QR code invalid!");
// // // // // //           }
// // // // // //         },
// // // // // //         (errorMessage) => {
// // // // // //           // Handle scan errors if needed
// // // // // //           console.warn("QR scan error:", errorMessage);
// // // // // //         }
// // // // // //       ).catch((err) => console.error("Unable to start scanning:", err));
// // // // // //     }

// // // // // //     return () => {
// // // // // //       if (html5QrcodeScanner) {
// // // // // //         html5QrcodeScanner.stop().catch(() => {});
// // // // // //       }
// // // // // //     };
// // // // // //   }, [scannerOpen]);

// // // // // //   return (
// // // // // //     <div className="p-6">
// // // // // //       <Button onClick={() => setScannerOpen(true)}>Open QR Scanner</Button>

// // // // // //       {scannerOpen && (
// // // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// // // // // //           <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center">
// // // // // //             <h2 className="text-xl font-semibold mb-4">Scan QR Code</h2>
// // // // // //             <div id="qr-reader" ref={scannerRef} className="w-full h-64" />
// // // // // //             <button
// // // // // //               onClick={() => setScannerOpen(false)}
// // // // // //               className="mt-4 px-4 py-2 bg-gray-200 rounded-lg"
// // // // // //             >
// // // // // //               Close
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default QrScanner;
// // // // // // "use client";
// // // // // // import { Html5Qrcode } from "html5-qrcode";
// // // // // // import { useEffect, useRef, useState } from "react";
// // // // // // import axios from "axios";
// // // // // // import { Button } from "../../components/Layout/ui/button";

// // // // // // const QrScanner = () => {
// // // // // //   const [scannerOpen, setScannerOpen] = useState(false);
// // // // // //   const [scanResult, setScanResult] = useState(null);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const scannerRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     let html5QrcodeScanner;

// // // // // //     if (scannerOpen && scannerRef.current) {
// // // // // //       html5QrcodeScanner = new Html5Qrcode("qr-reader");

// // // // // //       html5QrcodeScanner
// // // // // //         .start(
// // // // // //           { facingMode: "environment" },
// // // // // //           { fps: 10, qrbox: 250 },
// // // // // //           async (decodedText) => {
// // // // // //             console.log("Scanned QR:", decodedText);
// // // // // //             setLoading(true);

// // // // // //             try {
// // // // // //               const res = await axios.post("/api/verify-qr", {
// // // // // //                 qr_code: decodedText,
// // // // // //               });

// // // // // //               setScanResult(res.data.data);
// // // // // //             } catch (err) {
// // // // // //               console.error(err);
// // // // // //               alert("Invalid or inactive ticket.");
// // // // // //             } finally {
// // // // // //               html5QrcodeScanner.stop();
// // // // // //               setScannerOpen(false);
// // // // // //               setLoading(false);
// // // // // //             }
// // // // // //           },
// // // // // //           (errorMessage) => {
// // // // // //             console.warn("QR scan error:", errorMessage);
// // // // // //           }
// // // // // //         )
// // // // // //         .catch((err) => console.error("Unable to start scanning:", err));
// // // // // //     }

// // // // // //     return () => {
// // // // // //       if (html5QrcodeScanner) {
// // // // // //         html5QrcodeScanner.stop().catch(() => {});
// // // // // //       }
// // // // // //     };
// // // // // //   }, [scannerOpen]);

// // // // // //   const handleCheckIn = async () => {
// // // // // //     try {
// // // // // //       const res = await axios.post("/api/check-in", {
// // // // // //         qr_code: scanResult.booking.qr_code,
// // // // // //       });
// // // // // //       alert(res.data.message);
// // // // // //       setScanResult(null);
// // // // // //     } catch (err) {
// // // // // //       alert(err.response?.data?.message || "Check-in failed");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-6">
// // // // // //       <Button onClick={() => setScannerOpen(true)}>Open QR Scanner</Button>

// // // // // //       {scannerOpen && (
// // // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// // // // // //           <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center">
// // // // // //             <h2 className="text-xl font-semibold mb-4">Scan QR Code</h2>
// // // // // //             <div id="qr-reader" ref={scannerRef} className="w-full h-64" />
// // // // // //             <button
// // // // // //               onClick={() => setScannerOpen(false)}
// // // // // //               className="mt-4 px-4 py-2 bg-gray-200 rounded-lg"
// // // // // //             >
// // // // // //               Close
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Show scan result */}
// // // // // //       {scanResult && (
// // // // // //         <div className="mt-6 bg-white shadow-md p-4 rounded-xl">
// // // // // //           <h3 className="text-lg font-semibold mb-2 text-green-700">
// // // // // //             ✅ Ticket Verified
// // // // // //           </h3>

// // // // // //           <div className="text-gray-700 space-y-1">
// // // // // //             <p>
// // // // // //               <strong>User:</strong> {scanResult.user.name} (
// // // // // //               {scanResult.user.email})
// // // // // //             </p>
// // // // // //             <p>
// // // // // //               <strong>Event:</strong> {scanResult.event.title}
// // // // // //             </p>
// // // // // //             <p>
// // // // // //               <strong>Location:</strong> {scanResult.event.location}
// // // // // //             </p>
// // // // // //             <p>
// // // // // //               <strong>Ticket:</strong> {scanResult.ticket.name} — Rs.
// // // // // //               {scanResult.ticket.price}
// // // // // //             </p>
// // // // // //             <p>
// // // // // //               <strong>Status:</strong> {scanResult.booking.status}
// // // // // //             </p>
// // // // // //           </div>

// // // // // //           <div className="mt-4 flex gap-3">
// // // // // //             <Button onClick={handleCheckIn}>Check In</Button>
// // // // // //             <Button
// // // // // //               variant="outline"
// // // // // //               onClick={() => setScanResult(null)}
// // // // // //             >
// // // // // //               Close
// // // // // //             </Button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {loading && <p className="mt-4 text-gray-600">Verifying QR...</p>}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default QrScanner;
// // // // // "use client";

// // // // // import axios from "axios";
// // // // // import { Html5Qrcode } from "html5-qrcode";
// // // // // import { useEffect, useRef, useState } from "react";
// // // // // import { Button } from "../../components/Layout/ui/button";

// // // // // const QrScanner = () => {
// // // // //   const [scannerOpen, setScannerOpen] = useState(false);
// // // // //   const [scanResult, setScanResult] = useState(null);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);
// // // // //   const scannerRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     let html5QrcodeScanner;

// // // // //     if (scannerOpen && scannerRef.current) {
// // // // //       html5QrcodeScanner = new Html5Qrcode("qr-reader");

// // // // //       html5QrcodeScanner
// // // // //         .start(
// // // // //           { facingMode: "environment" },
// // // // //           { fps: 10, qrbox: 250 },
// // // // //           async (decodedText) => {
// // // // //             setLoading(true);
// // // // //             setError(null);

// // // // //             try {
// // // // //               // Send scanned QR to backend
// // // // //               const res = await axios.post("http://localhost:8000/api/verify-qr", {
// // // // //                 qr_code: decodedText,
// // // // //               });

// // // // //               const data = res.data.data;

// // // // //               if (data.booking.checked_in) {
// // // // //                 setError("Ticket already checked in!");
// // // // //               }

// // // // //               setScanResult(data);
// // // // //             } catch (err) {
// // // // //               console.error(err);
// // // // //               setError(err.response?.data?.message || "Invalid or inactive ticket.");
// // // // //               setScanResult(null);
// // // // //             } finally {
// // // // //               setLoading(false);
// // // // //             }
// // // // //           },
// // // // //           (errorMessage) => {
// // // // //             console.warn("QR scan error:", errorMessage);
// // // // //           }
// // // // //         )
// // // // //         .catch((err) => console.error("Unable to start scanning:", err));
// // // // //     }

// // // // //     return () => {
// // // // //       if (html5QrcodeScanner) {
// // // // //         html5QrcodeScanner.stop().catch(() => {});
// // // // //       }
// // // // //     };
// // // // //   }, [scannerOpen]);

// // // // //   const handleCheckIn = async () => {
// // // // //     if (!scanResult) return;

// // // // //     try {
// // // // //       setLoading(true);
// // // // //       const res = await axios.post("http://localhost:8000/api/verify-qr-code", {
// // // // //         qr_code: scanResult.booking.qr_code,
// // // // //       });

// // // // //       alert(res.data.message);

// // // // //       // Update local state
// // // // //       setScanResult({ ...scanResult, booking: { ...scanResult.booking, checked_in: true } });
// // // // //     } catch (err) {
// // // // //       alert(err.response?.data?.message || "Check-in failed");
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-6">
// // // // //       <Button onClick={() => setScannerOpen(true)}>Open QR Scanner</Button>

// // // // //       {scannerOpen && (
// // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// // // // //           <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center">
// // // // //             <h2 className="text-xl font-semibold mb-4">Scan QR Code</h2>
// // // // //             <div id="qr-reader" ref={scannerRef} className="w-full h-64" />
// // // // //             <Button variant="outline" onClick={() => setScannerOpen(false)} className="mt-4">
// // // // //               Close
// // // // //             </Button>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {loading && <p className="mt-4 text-gray-600">Verifying QR...</p>}

// // // // //       {error && <p className="mt-4 text-red-600">{error}</p>}

// // // // //       {scanResult && !error && (
// // // // //         <div className="mt-6 bg-white shadow-md p-4 rounded-xl">
// // // // //           <h3 className="text-lg font-semibold mb-2 text-green-700">
// // // // //             ✅ Ticket Verified
// // // // //           </h3>

// // // // //           <div className="text-gray-700 space-y-1">
// // // // //             <p>
// // // // //               <strong>User:</strong> {scanResult.user.name} ({scanResult.user.email})
// // // // //             </p>
// // // // //             <p>
// // // // //               <strong>Event:</strong> {scanResult.event.title}
// // // // //             </p>
// // // // //             <p>
// // // // //               <strong>Location:</strong> {scanResult.event.location || "N/A"}
// // // // //             </p>
// // // // //             <p>
// // // // //               <strong>Ticket:</strong> {scanResult.ticket.name || "General"} — Rs. {scanResult.ticket.price}
// // // // //             </p>
// // // // //             <p>
// // // // //               <strong>Status:</strong> {scanResult.booking.status}
// // // // //             </p>
// // // // //             <p>
// // // // //               <strong>Checked In:</strong> {scanResult.booking.checked_in ? "Yes" : "No"}
// // // // //             </p>
// // // // //           </div>

// // // // //           {!scanResult.booking.checked_in && (
// // // // //             <div className="mt-4 flex gap-3">
// // // // //               <Button onClick={handleCheckIn}>Check In</Button>
// // // // //               <Button variant="outline" onClick={() => setScanResult(null)}>
// // // // //                 Close
// // // // //               </Button>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default QrScanner;
// // // // // "use client";
// // // // // import { Button } from "@/components/Layout/ui/button";
// // // // // import axios from "axios";
// // // // // import { Html5Qrcode } from "html5-qrcode";
// // // // // import { useEffect, useRef, useState } from "react";

// // // // // export default function QrScanner() {
// // // // //   const [scannerActive, setScannerActive] = useState(false);
// // // // //   const [scanResult, setScanResult] = useState(null);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   const scannerRef = useRef(null);
// // // // //   const html5QrcodeScanner = useRef(null);
// // // // //   const scannerRunning = useRef(false); // ✅ track if running

// // // // //   useEffect(() => {
// // // // //     if (scannerActive && scannerRef.current) {
// // // // //       html5QrcodeScanner.current = new Html5Qrcode("qr-reader");

// // // // //       html5QrcodeScanner.current
// // // // //         .start(
// // // // //           { facingMode: "environment" },
// // // // //           { fps: 10, qrbox: 250 },
// // // // //           async (decodedText) => {
// // // // //             setLoading(true);

// // // // //             try {
// // // // //               const res = await axios.post("http://localhost:8000/api/verify-qr", {
// // // // //                 qr_code: decodedText,
// // // // //               });

// // // // //               setScanResult(res.data.data);
// // // // //               setError(null);
// // // // //             } catch (err) {
// // // // //               setError(err.response?.data?.message || "Invalid or inactive ticket.");
// // // // //               setScanResult(null);
// // // // //             } finally {
// // // // //               setLoading(false);
// // // // //               if (scannerRunning.current) {
// // // // //                 await html5QrcodeScanner.current.stop().catch(() => {});
// // // // //                 scannerRunning.current = false; // ✅ mark as stopped
// // // // //               }
// // // // //               setScannerActive(false);
// // // // //             }
// // // // //           },
// // // // //           (errorMessage) => console.warn("QR scan error:", errorMessage)
// // // // //         )
// // // // //         .then(() => {
// // // // //           scannerRunning.current = true; // ✅ mark as running
// // // // //         })
// // // // //         .catch((err) => console.error("Unable to start scanning:", err));
// // // // //     }

// // // // //     return () => {
// // // // //       if (html5QrcodeScanner.current && scannerRunning.current) {
// // // // //         html5QrcodeScanner.current.stop().catch(() => {});
// // // // //         scannerRunning.current = false;
// // // // //       }
// // // // //     };
// // // // //   }, [scannerActive]);

// // // // //   const handleCheckIn = async () => {
// // // // //     if (!scanResult?.booking?.id) return;

// // // // //     try {
// // // // //       setLoading(true);
// // // // //       const res = await axios.put(
// // // // //         `http://localhost:8000/api/bookings/${scanResult.booking.id}/check-in`
// // // // //       );
// // // // //       alert(res.data.message || "Checked in successfully!");
// // // // //       setScanResult({ ...scanResult, booking: { ...scanResult.booking, checked_in: true } });
// // // // //     } catch (err) {
// // // // //       alert(err.response?.data?.message || "Check-in failed");
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-6 flex flex-col items-center justify-center min-h-screen bg-gray-50">
// // // // //       {!scannerActive && !scanResult && !error && (
// // // // //         <Button onClick={() => setScannerActive(true)}>Open QR Scanner</Button>
// // // // //       )}

// // // // //       {scannerActive && (
// // // // //         <div className="fixed inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center z-50">
// // // // //           <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
// // // // //             <h2 className="text-xl font-semibold mb-4">Scan Ticket QR</h2>
// // // // //             <div id="qr-reader" ref={scannerRef} className="w-full h-64 border rounded-lg" />
// // // // //             <Button
// // // // //               variant="outline"
// // // // //               onClick={async () => {
// // // // //                 if (scannerRunning.current) {
// // // // //                   await html5QrcodeScanner.current.stop().catch(() => {});
// // // // //                   scannerRunning.current = false;
// // // // //                 }
// // // // //                 setScannerActive(false);
// // // // //               }}
// // // // //               className="mt-4"
// // // // //             >
// // // // //               Close
// // // // //             </Button>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {loading && <p className="mt-4 text-gray-600">Verifying QR...</p>}

// // // // //       {scanResult && (
// // // // //         <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md mt-8 text-center">
// // // // //           <h3 className="text-2xl font-semibold text-green-600 mb-4">✅ Ticket Verified</h3>
// // // // //           <p>
// // // // //             <strong>User:</strong> {scanResult.user.name} ({scanResult.user.email})
// // // // //           </p>
// // // // //           <p>
// // // // //             <strong>Event:</strong> {scanResult.event.title}
// // // // //           </p>
// // // // //           <p>
// // // // //             <strong>Location:</strong> {scanResult.event.location}
// // // // //           </p>
// // // // //           <p>
// // // // //             <strong>Ticket:</strong> {scanResult.ticket.name} — Rs. {scanResult.ticket.price}
// // // // //           </p>
// // // // //           <p>
// // // // //             <strong>Status:</strong> {scanResult.booking.status}
// // // // //           </p>
// // // // //           <p>
// // // // //             <strong>Checked In:</strong> {scanResult.booking.checked_in ? "Yes" : "No"}
// // // // //           </p>

// // // // //           <div className="flex justify-center gap-3 mt-5">
// // // // //             {!scanResult.booking.checked_in && (
// // // // //               <Button onClick={handleCheckIn} className="bg-green-600 text-white">
// // // // //                 Check In
// // // // //               </Button>
// // // // //             )}
// // // // //             <Button variant="outline" onClick={() => setScanResult(null)}>
// // // // //               Close
// // // // //             </Button>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {error && (
// // // // //         <div className="bg-red-100 border border-red-300 text-red-700 rounded-xl p-5 mt-8 text-center">
// // // // //           <h3 className="text-lg font-semibold mb-2">❌ Verification Failed</h3>
// // // // //           <p>{error}</p>
// // // // //           <Button variant="outline" className="mt-4" onClick={() => setError(null)}>
// // // // //             Try Again
// // // // //           </Button>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // // "use client";

// // // // // import { Button } from "@/components/Layout/ui/button";
// // // // // import axios from "axios";
// // // // // import { AnimatePresence, motion } from "framer-motion";
// // // // // import { Howl } from "howler";
// // // // // import { Html5Qrcode } from "html5-qrcode";
// // // // // import { useEffect, useRef, useState } from "react";
// // // // // import { toast, ToastContainer } from "react-toastify";
// // // // // import "react-toastify/dist/ReactToastify.css";

// // // // // export default function QrScanner() {
// // // // //   const [scannerActive, setScannerActive] = useState(false);
// // // // //   const [scanResult, setScanResult] = useState(null);
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   const scannerRef = useRef(null);
// // // // //   const html5QrcodeScanner = useRef(null);
// // // // //   const scannerRunning = useRef(false);

// // // // //   // Sounds
// // // // //   const successSound = new Howl({ src: ["/sounds/success.mp3"] });
// // // // //   const errorSound = new Howl({ src: ["/sounds/error.mp3"] });

// // // // //   useEffect(() => {
// // // // //     if (scannerActive && scannerRef.current) {
// // // // //       html5QrcodeScanner.current = new Html5Qrcode("qr-reader");

// // // // //       html5QrcodeScanner.current
// // // // //         .start(
// // // // //           { facingMode: "environment" },
// // // // //           { fps: 10, qrbox: 250 },
// // // // //           async (decodedText) => {
// // // // //             setLoading(true);

// // // // //             try {
// // // // //               const res = await axios.post("http://localhost:8000/api/verify-qr", {
// // // // //                 qr_code: decodedText,
// // // // //               });

// // // // //               const data = res.data.data;
// // // // //               setScanResult(data);
// // // // //               toast.success("Ticket Verified! 🎉");
// // // // //               successSound.play();
// // // // //             } catch (err) {
// // // // //               setScanResult(null);
// // // // //               toast.error(err.response?.data?.message || "Invalid or inactive ticket ❌");
// // // // //               errorSound.play();
// // // // //             } finally {
// // // // //               setLoading(false);
// // // // //               if (scannerRunning.current) {
// // // // //                 await html5QrcodeScanner.current.stop().catch(() => {});
// // // // //                 scannerRunning.current = false;
// // // // //               }
// // // // //               setScannerActive(false);
// // // // //             }
// // // // //           },
// // // // //           (errorMessage) => console.warn("QR scan error:", errorMessage)
// // // // //         )
// // // // //         .then(() => {
// // // // //           scannerRunning.current = true;
// // // // //         })
// // // // //         .catch((err) => console.error("Unable to start scanning:", err));
// // // // //     }

// // // // //     return () => {
// // // // //       if (html5QrcodeScanner.current && scannerRunning.current) {
// // // // //         html5QrcodeScanner.current.stop().catch(() => {});
// // // // //         scannerRunning.current = false;
// // // // //       }
// // // // //     };
// // // // //   }, [scannerActive]);

// // // // //   const handleCheckIn = async () => {
// // // // //     if (!scanResult?.booking?.id) return;

// // // // //     try {
// // // // //       setLoading(true);
// // // // //       const res = await axios.put(
// // // // //         `http://localhost:8000/api/bookings/${scanResult.booking.id}/check-in`
// // // // //       );
// // // // //       toast.success(res.data.message || "Checked in successfully! ✅");
// // // // //       successSound.play();
// // // // //       setScanResult({ ...scanResult, booking: { ...scanResult.booking, checked_in: true } });
// // // // //     } catch (err) {
// // // // //       toast.error(err.response?.data?.message || "Check-in failed ❌");
// // // // //       errorSound.play();
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-6 flex flex-col items-center justify-center min-h-screen bg-gray-50">
// // // // //       <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

// // // // //       {!scannerActive && !scanResult && (
// // // // //         <Button onClick={() => setScannerActive(true)}>Open QR Scanner</Button>
// // // // //       )}

// // // // //       {/* Scanner Modal */}
// // // // //       <AnimatePresence>
// // // // //         {scannerActive && (
// // // // //           <motion.div
// // // // //             className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             exit={{ opacity: 0 }}
// // // // //           >
// // // // //             <motion.div
// // // // //               className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center"
// // // // //               initial={{ scale: 0.8 }}
// // // // //               animate={{ scale: 1 }}
// // // // //               exit={{ scale: 0.8 }}
// // // // //             >
// // // // //               <h2 className="text-xl font-semibold mb-4">Scan Ticket QR</h2>
// // // // //               <div id="qr-reader" ref={scannerRef} className="w-full h-64 border rounded-lg" />
// // // // //               <Button
// // // // //                 variant="outline"
// // // // //                 onClick={async () => {
// // // // //                   if (scannerRunning.current) {
// // // // //                     await html5QrcodeScanner.current.stop().catch(() => {});
// // // // //                     scannerRunning.current = false;
// // // // //                   }
// // // // //                   setScannerActive(false);
// // // // //                 }}
// // // // //                 className="mt-4"
// // // // //               >
// // // // //                 Close
// // // // //               </Button>
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>

// // // // //       {/* Scan Result Card */}
// // // // //       <AnimatePresence>
// // // // //         {scanResult && (
// // // // //           <motion.div
// // // // //             className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md mt-8 text-center"
// // // // //             initial={{ opacity: 0, y: 50 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             exit={{ opacity: 0, y: 50 }}
// // // // //           >
// // // // //             <h3 className="text-2xl font-semibold text-green-600 mb-4">✅ Ticket Verified</h3>
// // // // //             <p><strong>User:</strong> {scanResult.user.name} ({scanResult.user.email})</p>
// // // // //             <p><strong>Event:</strong> {scanResult.event.title}</p>
// // // // //             <p><strong>Location:</strong> {scanResult.event.location}</p>
// // // // //             <p><strong>Ticket:</strong> {scanResult.ticket.name} — Rs. {scanResult.ticket.price}</p>
// // // // //             <p><strong>Status:</strong> {scanResult.booking.status}</p>
// // // // //             <p><strong>Checked In:</strong> {scanResult.booking.checked_in ? "Yes" : "No"}</p>

// // // // //             <div className="flex justify-center gap-3 mt-5">
// // // // //               {!scanResult.booking.checked_in && (
// // // // //                 <Button onClick={handleCheckIn} className="bg-green-600 text-white">
// // // // //                   Check In
// // // // //                 </Button>
// // // // //               )}
// // // // //               <Button variant="outline" onClick={() => setScanResult(null)}>Close</Button>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>

// // // // //       {loading && <p className="mt-4 text-gray-600">Processing...</p>}
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // "use client";

// // // // import axios from "axios";
// // // // import { AnimatePresence, motion } from "framer-motion";
// // // // import { Howl } from "howler";
// // // // import { Html5Qrcode } from "html5-qrcode";
// // // // import { useEffect, useRef, useState } from "react";
// // // // import Confetti from "react-confetti";
// // // // import { Button } from "../../components/Layout/ui/button";

// // // // const QrScanner = () => {
// // // //   const [scannerOpen, setScannerOpen] = useState(false);
// // // //   const [scanResult, setScanResult] = useState(null);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const [processingScan, setProcessingScan] = useState(false);
// // // //   const [showConfetti, setShowConfetti] = useState(false);
// // // //   const [flash, setFlash] = useState(false);
// // // //   const [shakeError, setShakeError] = useState(false);
// // // //   const scannerRef = useRef(null);

// // // //   // Sounds
// // // //   const successSound = new Howl({ src: ["/sounds/success.mp3"] });
// // // //   const errorSound = new Howl({ src: ["/sounds/error.mp3"] });
// // // //   const beepSound = new Howl({ src: ["/sounds/beep.mp3"] });

// // // //   useEffect(() => {
// // // //     let html5QrcodeScanner;

// // // //     const startScanner = async () => {
// // // //       if (!scannerOpen || !scannerRef.current) return;

// // // //       html5QrcodeScanner = new Html5Qrcode("qr-reader");

// // // //       try {
// // // //         await html5QrcodeScanner.start(
// // // //           { facingMode: "environment" },
// // // //           { fps: 10, qrbox: 250 },
// // // //           async (decodedText) => {
// // // //             if (processingScan) return;
// // // //             setProcessingScan(true);

// // // //             // Play beep on every scan attempt
// // // //             beepSound.play();

// // // //             // Camera flash effect
// // // //             setFlash(true);
// // // //             setTimeout(() => setFlash(false), 100);

// // // //             try {
// // // //               if (html5QrcodeScanner && html5QrcodeScanner.getState() === 2) {
// // // //                 await html5QrcodeScanner.stop();
// // // //               }
// // // //               setScannerOpen(false);

// // // //               setLoading(true);
// // // //               setError(null);

// // // //               const res = await axios.post(
// // // //                 "http://localhost:8000/api/verify-qr",
// // // //                 { qr_code: decodedText }
// // // //               );

// // // //               const data = res.data.data;

// // // //               if (data.booking.checked_in) {
// // // //                 setError("Ticket already checked in!");
// // // //                 errorSound.play();
// // // //                 setShakeError(true);
// // // //                 setTimeout(() => setShakeError(false), 500);
// // // //                 setScanResult(null);
// // // //               } else {
// // // //                 setScanResult(data);
// // // //                 successSound.play();
// // // //                 setShowConfetti(true);
// // // //                 setTimeout(() => setShowConfetti(false), 3000);
// // // //               }
// // // //             } catch (err) {
// // // //               console.error(err);
// // // //               setError(
// // // //                 err.response?.data?.message || "Invalid or inactive ticket."
// // // //               );
// // // //               errorSound.play();
// // // //               setShakeError(true);
// // // //               setTimeout(() => setShakeError(false), 500);
// // // //               setScanResult(null);
// // // //             } finally {
// // // //               setLoading(false);
// // // //               setProcessingScan(false);
// // // //             }
// // // //           },
// // // //           (errorMessage) => {
// // // //             console.warn("QR scan error:", errorMessage);
// // // //           }
// // // //         );
// // // //       } catch (err) {
// // // //         console.error("Unable to start scanning:", err);
// // // //       }
// // // //     };

// // // //     startScanner();

// // // //     return () => {
// // // //       if (
// // // //         html5QrcodeScanner &&
// // // //         html5QrcodeScanner.getState &&
// // // //         html5QrcodeScanner.getState() === 2
// // // //       ) {
// // // //         html5QrcodeScanner.stop().catch(() => {});
// // // //       }
// // // //     };
// // // //   }, [scannerOpen, processingScan]);

// // // //   const handleCheckIn = async () => {
// // // //     if (!scanResult) return;

// // // //     try {
// // // //       setLoading(true);
// // // //       const res = await axios.post("http://localhost:8000/api/check-in", {
// // // //         qr_code: scanResult.booking.qr_code,
// // // //       });

// // // //       alert(res.data.message);
// // // //       setScanResult({
// // // //         ...scanResult,
// // // //         booking: { ...scanResult.booking, checked_in: true },
// // // //       });
// // // //     } catch (err) {
// // // //       alert(err.response?.data?.message || "Check-in failed");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="p-6 relative">
// // // //       {showConfetti && <Confetti numberOfPieces={200} />}
// // // //       {flash && (
// // // //         <motion.div
// // // //           initial={{ opacity: 0 }}
// // // //           animate={{ opacity: 0.7 }}
// // // //           exit={{ opacity: 0 }}
// // // //           className="absolute inset-0 bg-white z-50"
// // // //         />
// // // //       )}

// // // //       <Button onClick={() => setScannerOpen(true)}>Open QR Scanner</Button>

// // // //       <AnimatePresence>
// // // //         {scannerOpen && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
// // // //           >
// // // //             <motion.div
// // // //               initial={{ scale: 0.8 }}
// // // //               animate={{ scale: 1 }}
// // // //               exit={{ scale: 0.8 }}
// // // //               className="bg-white rounded-2xl p-6 max-w-sm w-full text-center"
// // // //             >
// // // //               <h2 className="text-xl font-semibold mb-4">Scan QR Code</h2>
// // // //               <div id="qr-reader" ref={scannerRef} className="w-full h-64" />
// // // //               <Button
// // // //                 variant="outline"
// // // //                 onClick={() => setScannerOpen(false)}
// // // //                 className="mt-4"
// // // //               >
// // // //                 Close
// // // //               </Button>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       {loading && (
// // // //         <motion.p
// // // //           className="mt-4 text-gray-600"
// // // //           initial={{ opacity: 0 }}
// // // //           animate={{ opacity: 1 }}
// // // //         >
// // // //           Verifying QR...
// // // //         </motion.p>
// // // //       )}

// // // //       {error && (
// // // //         <motion.div
// // // //           className="mt-4 text-red-600 font-semibold"
// // // //           initial={{ x: 0 }}
// // // //           animate={shakeError ? { x: [0, -10, 10, -10, 10, 0] } : { x: 0 }}
// // // //           transition={{ duration: 0.5 }}
// // // //         >
// // // //           {error}
// // // //         </motion.div>
// // // //       )}

// // // //       {scanResult && !error && (
// // // //         <motion.div
// // // //           className="mt-6 bg-white shadow-md p-4 rounded-xl"
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //         >
// // // //           <h3 className="text-lg font-semibold mb-2 text-green-700">
// // // //             ✅ Ticket Verified
// // // //           </h3>

// // // //           <div className="text-gray-700 space-y-1">
// // // //             <p>
// // // //               <strong>User:</strong> {scanResult.user.name} (
// // // //               {scanResult.user.email})
// // // //             </p>
// // // //             <p>
// // // //               <strong>Event:</strong> {scanResult.event.title}
// // // //             </p>
// // // //             <p>
// // // //               <strong>Location:</strong> {scanResult.event.location || "N/A"}
// // // //             </p>
// // // //             <p>
// // // //               <strong>Ticket:</strong> {scanResult.ticket.name || "General"} — Rs.{" "}
// // // //               {scanResult.ticket.price}
// // // //             </p>
// // // //             <p>
// // // //               <strong>Status:</strong> {scanResult.booking.status}
// // // //             </p>
// // // //             <p>
// // // //               <strong>Checked In:</strong>{" "}
// // // //               {scanResult.booking.checked_in ? "Yes" : "No"}
// // // //             </p>
// // // //           </div>

// // // //           {!scanResult.booking.checked_in && (
// // // //             <div className="mt-4 flex gap-3">
// // // //               <Button onClick={handleCheckIn}>Check In</Button>
// // // //               <Button variant="outline" onClick={() => setScanResult(null)}>
// // // //                 Close
// // // //               </Button>
// // // //             </div>
// // // //           )}
// // // //         </motion.div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default QrScanner;
// // // "use client";

// // // import axios from "axios";
// // // import { AnimatePresence, motion } from "framer-motion";
// // // import { Howl } from "howler";
// // // import { Html5Qrcode } from "html5-qrcode";
// // // import {
// // //   AlertCircle,
// // //   Calendar,
// // //   CheckCircle,
// // //   Clock,
// // //   MapPin,
// // //   Smartphone,
// // //   Ticket,
// // //   User,
// // //   X,
// // // } from "lucide-react";
// // // import { useEffect, useRef, useState } from "react";
// // // import Confetti from "react-confetti";
// // // import { Button } from "../../components/Layout/ui/button";

// // // const QrScanner = () => {
// // //   const [scannerOpen, setScannerOpen] = useState(false);
// // //   const [scanResult, setScanResult] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [processingScan, setProcessingScan] = useState(false);
// // //   const [showConfetti, setShowConfetti] = useState(false);
// // //   const [flash, setFlash] = useState(false);
// // //   const [showFullScreenResult, setShowFullScreenResult] = useState(false);
// // //   const scannerRef = useRef(null);

// // //   // Sounds
// // //   const successSound = new Howl({ src: ["/sounds/success.mp3"] });
// // //   const errorSound = new Howl({ src: ["/sounds/error.mp3"] });
// // //   const beepSound = new Howl({ src: ["/sounds/beep.mp3"] });

// // //   useEffect(() => {
// // //     let html5QrcodeScanner;

// // //     const startScanner = async () => {
// // //       if (!scannerOpen || !scannerRef.current) return;

// // //       html5QrcodeScanner = new Html5Qrcode("qr-reader");

// // //       try {
// // //         await html5QrcodeScanner.start(
// // //           { facingMode: "environment" },
// // //           { fps: 10, qrbox: 250 },
// // //           async (decodedText) => {
// // //             if (processingScan) return;
// // //             setProcessingScan(true);

// // //             beepSound.play();
// // //             setFlash(true);
// // //             setTimeout(() => setFlash(false), 100);

// // //             try {
// // //               if (html5QrcodeScanner && html5QrcodeScanner.getState() === 2) {
// // //                 await html5QrcodeScanner.stop();
// // //               }
// // //               setScannerOpen(false);

// // //               setLoading(true);
// // //               setError(null);

// // //               const res = await axios.post(
// // //                 "http://localhost:8000/api/verify-qr",
// // //                 { qr_code: decodedText }
// // //               );

// // //               const data = res.data.data;

// // //               if (data.booking.checked_in) {
// // //                 setError("Ticket already checked in!");
// // //                 errorSound.play();
// // //                 setScanResult(null);
// // //               } else {
// // //                 setScanResult(data);
// // //                 successSound.play();
// // //                 setShowConfetti(true);
// // //                 setShowFullScreenResult(true);
// // //                 setTimeout(() => setShowConfetti(false), 3000);
// // //               }
// // //             } catch (err) {
// // //               console.error(err);
// // //               setError(
// // //                 err.response?.data?.message || "Invalid or inactive ticket."
// // //               );
// // //               errorSound.play();
// // //               setScanResult(null);
// // //               setShowFullScreenResult(true);
// // //             } finally {
// // //               setLoading(false);
// // //               setProcessingScan(false);
// // //             }
// // //           },
// // //           (errorMessage) => {
// // //             console.warn("QR scan error:", errorMessage);
// // //           }
// // //         );
// // //       } catch (err) {
// // //         console.error("Unable to start scanning:", err);
// // //       }
// // //     };

// // //     startScanner();

// // //     return () => {
// // //       if (
// // //         html5QrcodeScanner &&
// // //         html5QrcodeScanner.getState &&
// // //         html5QrcodeScanner.getState() === 2
// // //       ) {
// // //         html5QrcodeScanner.stop().catch(() => {});
// // //       }
// // //     };
// // //   }, [scannerOpen, processingScan]);

// // //   const handleCheckIn = async () => {
// // //     if (!scanResult) return;

// // //     try {
// // //       setLoading(true);
// // //       const res = await axios.post("http://localhost:8000/api/check-in", {
// // //         qr_code: scanResult.booking.qr_code,
// // //       });

// // //       // Update scan result
// // //       setScanResult({
// // //         ...scanResult,
// // //         booking: { ...scanResult.booking, checked_in: true },
// // //       });
      
// // //       // Show success notification
// // //       successSound.play();
      
// // //     } catch (err) {
// // //       alert(err.response?.data?.message || "Check-in failed");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const closeFullScreenResult = () => {
// // //     setShowFullScreenResult(false);
// // //     setError(null);
// // //     if (scanResult?.booking?.checked_in) {
// // //       setScanResult(null);
// // //     }
// // //   };

// // //   return (
// // //     <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
// // //       {showConfetti && <Confetti numberOfPieces={200} recycle={false} />}
// // //       {flash && (
// // //         <motion.div
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 0.9 }}
// // //           exit={{ opacity: 0 }}
// // //           className="fixed inset-0 bg-white z-40 pointer-events-none"
// // //         />
// // //       )}

// // //       <div className="p-6 flex flex-col items-center justify-center min-h-screen">
// // //         {/* Scanner Button */}
// // //         <motion.div
// // //           initial={{ scale: 0.9, opacity: 0 }}
// // //           animate={{ scale: 1, opacity: 1 }}
// // //           transition={{ delay: 0.2 }}
// // //           className="text-center mb-12"
// // //         >
// // //           <h1 className="text-3xl font-bold text-gray-900 mb-2">
// // //             QR Code Scanner
// // //           </h1>
// // //           <p className="text-gray-600 mb-8 max-w-md">
// // //             Scan attendee tickets for quick and easy check-in
// // //           </p>
// // //           <Button
// // //             onClick={() => setScannerOpen(true)}
// // //             className="px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
// // //             size="lg"
// // //           >
// // //             <Smartphone className="mr-2 h-5 w-5" />
// // //             Open Scanner
// // //           </Button>
// // //         </motion.div>

// // //         {/* Scanner Modal */}
// // //         <AnimatePresence>
// // //           {scannerOpen && (
// // //             <motion.div
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               exit={{ opacity: 0 }}
// // //               className="fixed inset-0 bg-black flex items-center justify-center z-50"
// // //             >
// // //               <div className="relative w-full max-w-lg">
// // //                 {/* Scanner View */}
// // //                 <div className="relative overflow-hidden rounded-2xl">
// // //                   <div id="qr-reader" ref={scannerRef} className="w-full h-96" />
                  
// // //                   {/* Scanner Overlay */}
// // //                   <div className="absolute inset-0 pointer-events-none">
// // //                     <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-green-400 rounded-lg animate-pulse"></div>
// // //                     <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
// // //                       <div className="w-64 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse mb-2"></div>
// // //                       <p className="text-sm font-semibold">Align QR code within frame</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 <div className="mt-6 text-center">
// // //                   <Button
// // //                     variant="outline"
// // //                     onClick={() => setScannerOpen(false)}
// // //                     className="px-6 py-3 border-2 rounded-xl text-white hover:bg-white/20"
// // //                   >
// // //                     Cancel Scan
// // //                   </Button>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>

// // //         {/* Full Screen Result Modal */}
// // //         <AnimatePresence>
// // //           {showFullScreenResult && (
// // //             <motion.div
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               exit={{ opacity: 0 }}
// // //               className="fixed inset-0 z-50 flex items-center justify-center p-4"
// // //             >
// // //               {/* Backdrop */}
// // //               <div
// // //                 className="absolute inset-0 bg-black/70 backdrop-blur-sm"
// // //                 onClick={closeFullScreenResult}
// // //               />

// // //               {/* Result Card */}
// // //               <motion.div
// // //                 initial={{ scale: 0.8, y: 50 }}
// // //                 animate={{ scale: 1, y: 0 }}
// // //                 exit={{ scale: 0.8, y: 50 }}
// // //                 className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden z-10"
// // //               >
// // //                 {/* Close Button */}
// // //                 <button
// // //                   onClick={closeFullScreenResult}
// // //                   className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
// // //                 >
// // //                   <X className="h-5 w-5 text-white" />
// // //                 </button>

// // //                 {error ? (
// // //                   // Error State
// // //                   <div className="bg-gradient-to-b from-red-50 to-white p-8">
// // //                     <div className="flex flex-col items-center text-center">
// // //                       <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
// // //                         <AlertCircle className="h-12 w-12 text-red-600" />
// // //                       </div>
// // //                       <h2 className="text-2xl font-bold text-gray-900 mb-2">
// // //                         Invalid Ticket
// // //                       </h2>
// // //                       <p className="text-red-600 text-lg font-medium mb-6">
// // //                         {error}
// // //                       </p>
// // //                       <div className="bg-red-50 rounded-xl p-6 w-full mb-6">
// // //                         <h3 className="font-semibold text-gray-900 mb-3">
// // //                           Possible Reasons:
// // //                         </h3>
// // //                         <ul className="text-gray-700 text-sm space-y-2 text-left">
// // //                           <li className="flex items-start">
// // //                             <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
// // //                             Ticket has already been used
// // //                           </li>
// // //                           <li className="flex items-start">
// // //                             <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
// // //                             Invalid QR code format
// // //                           </li>
// // //                           <li className="flex items-start">
// // //                             <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
// // //                             Ticket has been cancelled
// // //                           </li>
// // //                         </ul>
// // //                       </div>
// // //                       <Button
// // //                         onClick={() => {
// // //                           setError(null);
// // //                           setShowFullScreenResult(false);
// // //                         }}
// // //                         className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-lg hover:shadow-xl"
// // //                       >
// // //                         Try Again
// // //                       </Button>
// // //                     </div>
// // //                   </div>
// // //                 ) : (
// // //                   // Success State
// // //                   <div className="bg-gradient-to-b from-emerald-50 to-white">
// // //                     {/* Header */}
// // //                     <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-8 text-center">
// // //                       <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
// // //                         <CheckCircle className="h-10 w-10 text-white" />
// // //                       </div>
// // //                       <h2 className="text-3xl font-bold text-white mb-2">
// // //                         Ticket Verified!
// // //                       </h2>
// // //                       <p className="text-emerald-100">
// // //                         Ready for check-in
// // //                       </p>
// // //                     </div>

// // //                     {/* Ticket Details */}
// // //                     <div className="p-8">
// // //                       <div className="space-y-6">
// // //                         {/* User Info */}
// // //                         <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
// // //                           <div className="p-3 bg-blue-100 rounded-lg">
// // //                             <User className="h-6 w-6 text-blue-600" />
// // //                           </div>
// // //                           <div className="flex-1">
// // //                             <h3 className="font-semibold text-gray-900 mb-1">
// // //                               Attendee
// // //                             </h3>
// // //                             <p className="text-gray-900 font-medium">
// // //                               {scanResult?.user?.name}
// // //                             </p>
// // //                             <p className="text-sm text-gray-600">
// // //                               {scanResult?.user?.email}
// // //                             </p>
// // //                           </div>
// // //                         </div>

// // //                         {/* Event Info */}
// // //                         <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
// // //                           <div className="p-3 bg-purple-100 rounded-lg">
// // //                             <Calendar className="h-6 w-6 text-purple-600" />
// // //                           </div>
// // //                           <div className="flex-1">
// // //                             <h3 className="font-semibold text-gray-900 mb-1">
// // //                               Event
// // //                             </h3>
// // //                             <p className="text-gray-900 font-medium">
// // //                               {scanResult?.event?.title}
// // //                             </p>
// // //                             <div className="flex items-center mt-2 text-sm text-gray-600">
// // //                               <Clock className="h-4 w-4 mr-1" />
// // //                               {scanResult?.event?.date}
// // //                             </div>
// // //                           </div>
// // //                         </div>

// // //                         {/* Location */}
// // //                         <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
// // //                           <div className="p-3 bg-amber-100 rounded-lg">
// // //                             <MapPin className="h-6 w-6 text-amber-600" />
// // //                           </div>
// // //                           <div className="flex-1">
// // //                             <h3 className="font-semibold text-gray-900 mb-1">
// // //                               Venue
// // //                             </h3>
// // //                             <p className="text-gray-900">
// // //                               {scanResult?.event?.location || "Venue details"}
// // //                             </p>
// // //                           </div>
// // //                         </div>

// // //                         {/* Ticket Details */}
// // //                         <div className="flex items-start space-x-4 p-4 bg-indigo-50 rounded-xl">
// // //                           <div className="p-3 bg-indigo-100 rounded-lg">
// // //                             <Ticket className="h-6 w-6 text-indigo-600" />
// // //                           </div>
// // //                           <div className="flex-1">
// // //                             <h3 className="font-semibold text-gray-900 mb-1">
// // //                               Ticket Details
// // //                             </h3>
// // //                             <div className="flex justify-between items-center">
// // //                               <div>
// // //                                 <p className="text-gray-900 font-medium">
// // //                                   {scanResult?.ticket?.name}
// // //                                 </p>
// // //                                 <p className="text-sm text-gray-600">
// // //                                   Status: {scanResult?.booking?.status}
// // //                                 </p>
// // //                               </div>
// // //                               <div className="text-right">
// // //                                 <p className="text-lg font-bold text-indigo-700">
// // //                                   ₹{scanResult?.ticket?.price}
// // //                                 </p>
// // //                                 <p className="text-sm text-gray-600">
// // //                                   Paid
// // //                                 </p>
// // //                               </div>
// // //                             </div>
// // //                           </div>
// // //                         </div>

// // //                         {/* Check-in Status */}
// // //                         <div className={`p-4 rounded-xl ${scanResult?.booking?.checked_in ? 'bg-green-50' : 'bg-yellow-50'}`}>
// // //                           <div className="flex items-center justify-between">
// // //                             <div className="flex items-center">
// // //                               <div className={`p-2 rounded-lg ${scanResult?.booking?.checked_in ? 'bg-green-100' : 'bg-yellow-100'}`}>
// // //                                 {scanResult?.booking?.checked_in ? (
// // //                                   <CheckCircle className="h-5 w-5 text-green-600" />
// // //                                 ) : (
// // //                                   <Clock className="h-5 w-5 text-yellow-600" />
// // //                                 )}
// // //                               </div>
// // //                               <div className="ml-3">
// // //                                 <h3 className="font-semibold text-gray-900">
// // //                                   Check-in Status
// // //                                 </h3>
// // //                                 <p className={`text-sm font-medium ${scanResult?.booking?.checked_in ? 'text-green-700' : 'text-yellow-700'}`}>
// // //                                   {scanResult?.booking?.checked_in ? 'Already Checked In' : 'Pending Check-in'}
// // //                                 </p>
// // //                               </div>
// // //                             </div>
// // //                             {scanResult?.booking?.checked_in && (
// // //                               <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
// // //                                 ✓ Done
// // //                               </span>
// // //                             )}
// // //                           </div>
// // //                         </div>
// // //                       </div>

// // //                       {/* Action Buttons */}
// // //                       <div className="mt-8 flex flex-col gap-3">
// // //                         {!scanResult?.booking?.checked_in ? (
// // //                           <Button
// // //                             onClick={handleCheckIn}
// // //                             disabled={loading}
// // //                             className="w-full py-4 text-lg rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
// // //                           >
// // //                             {loading ? (
// // //                               <>
// // //                                 <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
// // //                                 Processing...
// // //                               </>
// // //                             ) : (
// // //                               <>
// // //                                 <CheckCircle className="mr-2 h-5 w-5" />
// // //                                 Confirm Check-in
// // //                               </>
// // //                             )}
// // //                           </Button>
// // //                         ) : (
// // //                           <div className="text-center py-4 bg-green-50 rounded-xl">
// // //                             <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
// // //                             <h3 className="text-xl font-bold text-green-800 mb-1">
// // //                               Successfully Checked In!
// // //                             </h3>
// // //                             <p className="text-green-600">
// // //                               Attendee has been registered for the event
// // //                             </p>
// // //                           </div>
// // //                         )}
                        
// // //                         <Button
// // //                           variant="outline"
// // //                           onClick={closeFullScreenResult}
// // //                           className="w-full py-3 text-lg rounded-xl border-2"
// // //                         >
// // //                           {scanResult?.booking?.checked_in ? 'Close' : 'Cancel'}
// // //                         </Button>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 )}
// // //               </motion.div>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>

// // //         {/* Loading Overlay */}
// // //         {loading && (
// // //           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
// // //             <div className="bg-white p-8 rounded-2xl shadow-2xl text-center">
// // //               <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
// // //               <h3 className="text-lg font-semibold text-gray-900 mb-2">
// // //                 Verifying Ticket
// // //               </h3>
// // //               <p className="text-gray-600">
// // //                 Please wait while we validate the QR code...
// // //               </p>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default QrScanner;
// // "use client";

// // import axios from "axios";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { Howl } from "howler";
// // import { Html5Qrcode } from "html5-qrcode";
// // import {
// //   AlertCircle,
// //   Calendar,
// //   CheckCircle,
// //   Clock,
// //   MapPin,
// //   Smartphone,
// //   Ticket,
// //   User,
// //   X,
// // } from "lucide-react";
// // import { useEffect, useRef, useState } from "react";
// // import Confetti from "react-confetti";
// // import { Button } from "../../components/Layout/ui/button";

// // const QrScanner = () => {
// //   const [scannerOpen, setScannerOpen] = useState(false);
// //   const [scanResult, setScanResult] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [processingScan, setProcessingScan] = useState(false);
// //   const [showConfetti, setShowConfetti] = useState(false);
// //   const [flash, setFlash] = useState(false);
// //   const [showFullScreenResult, setShowFullScreenResult] = useState(false);
// //   const scannerRef = useRef(null);

// //   // Sounds
// //   const successSound = new Howl({ src: ["/sounds/success.mp3"] });
// //   const errorSound = new Howl({ src: ["/sounds/error.mp3"] });
// //   const beepSound = new Howl({ src: ["/sounds/beep.mp3"] });

// //   useEffect(() => {
// //     let html5QrcodeScanner;

// //     const startScanner = async () => {
// //       if (!scannerOpen || !scannerRef.current) return;

// //       html5QrcodeScanner = new Html5Qrcode("qr-reader");

// //       try {
// //         await html5QrcodeScanner.start(
// //           { facingMode: "environment" },
// //           { fps: 10, qrbox: 250 },
// //           async (decodedText) => {
// //             if (processingScan) return;
// //             setProcessingScan(true);

// //             beepSound.play();
// //             setFlash(true);
// //             setTimeout(() => setFlash(false), 100);

// //             try {
// //               if (html5QrcodeScanner && html5QrcodeScanner.getState() === 2) {
// //                 await html5QrcodeScanner.stop();
// //               }
// //               setScannerOpen(false);

// //               setLoading(true);
// //               setError(null);

// //               const res = await axios.post(
// //                 "http://localhost:8000/api/verify-qr",
// //                 { qr_code: decodedText }
// //               );

// //               const data = res.data.data;

// //               if (data.booking.checked_in) {
// //                 setError("Ticket already checked in!");
// //                 errorSound.play();
// //                 setScanResult(null);
// //               } else {
// //                 setScanResult(data);
// //                 successSound.play();
// //                 setShowConfetti(true);
// //                 setShowFullScreenResult(true);
// //                 setTimeout(() => setShowConfetti(false), 3000);
// //               }
// //             } catch (err) {
// //               console.error(err);
// //               setError(
// //                 err.response?.data?.message || "Invalid or inactive ticket."
// //               );
// //               errorSound.play();
// //               setScanResult(null);
// //               setShowFullScreenResult(true);
// //             } finally {
// //               setLoading(false);
// //               setProcessingScan(false);
// //             }
// //           },
// //           (errorMessage) => {
// //             console.warn("QR scan error:", errorMessage);
// //           }
// //         );
// //       } catch (err) {
// //         console.error("Unable to start scanning:", err);
// //       }
// //     };

// //     startScanner();

// //     return () => {
// //       if (
// //         html5QrcodeScanner &&
// //         html5QrcodeScanner.getState &&
// //         html5QrcodeScanner.getState() === 2
// //       ) {
// //         html5QrcodeScanner.stop().catch(() => {});
// //       }
// //     };
// //   }, [scannerOpen, processingScan]);

// //   const handleCheckIn = async () => {
// //     if (!scanResult) return;

// //     try {
// //       setLoading(true);
// //       const res = await axios.post("http://localhost:8000/api/check-in", {
// //         qr_code: scanResult.booking.qr_code,
// //       });

// //       // Update scan result
// //       setScanResult({
// //         ...scanResult,
// //         booking: { ...scanResult.booking, checked_in: true },
// //       });
      
// //       // Show success notification
// //       successSound.play();
      
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Check-in failed");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const closeFullScreenResult = () => {
// //     setShowFullScreenResult(false);
// //     setError(null);
// //     if (scanResult?.booking?.checked_in) {
// //       setScanResult(null);
// //     }
// //   };

// //   return (
// //     <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
// //       {showConfetti && <Confetti numberOfPieces={200} recycle={false} />}
      
// //       {/* Main Content - FIXED HEIGHT CONTAINER */}
// //       <div className="fixed inset-0 flex flex-col items-center justify-center p-4 overflow-hidden">
// //         {/* Scanner Button */}
// //         <motion.div
// //           initial={{ scale: 0.9, opacity: 0 }}
// //           animate={{ scale: 1, opacity: 1 }}
// //           transition={{ delay: 0.2 }}
// //           className="text-center mb-8 z-10"
// //         >
// //           <h1 className="text-3xl font-bold text-gray-900 mb-2">
// //             QR Code Scanner
// //           </h1>
// //           <p className="text-gray-600 mb-6 max-w-md">
// //             Scan attendee tickets for quick and easy check-in
// //           </p>
// //           <Button
// //             onClick={() => setScannerOpen(true)}
// //             className="px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
// //             size="lg"
// //           >
// //             <Smartphone className="mr-2 h-5 w-5" />
// //             Open Scanner
// //           </Button>
// //         </motion.div>

// //         {/* Scanner Modal - FULL SCREEN OVERLAY */}
// //         <AnimatePresence>
// //           {scannerOpen && (
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-4"
// //             >
// //               {flash && (
// //                 <div className="absolute inset-0 bg-white opacity-90 pointer-events-none z-10" />
// //               )}
              
// //               <div className="relative w-full max-w-lg mx-auto">
// //                 {/* Scanner View */}
// //                 <div className="relative overflow-hidden rounded-2xl">
// //                   <div id="qr-reader" ref={scannerRef} className="w-full h-80" />
                  
// //                   {/* Scanner Overlay */}
// //                   <div className="absolute inset-0 pointer-events-none">
// //                     <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-green-400 rounded-lg animate-pulse"></div>
// //                     <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
// //                       <div className="w-64 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse mb-2"></div>
// //                       <p className="text-sm font-semibold">Align QR code within frame</p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="mt-6 text-center">
// //                   <Button
// //                     variant="outline"
// //                     onClick={() => setScannerOpen(false)}
// //                     className="px-6 py-3 border-2 rounded-xl text-white hover:bg-white/20"
// //                   >
// //                     Cancel Scan
// //                   </Button>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>

// //         {/* Full Screen Result Modal - FIXED POSITION WITH SCROLL */}
// //         <AnimatePresence>
// //           {showFullScreenResult && (
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               className="fixed inset-0 z-50"
// //             >
// //               {/* Backdrop */}
// //               <div
// //                 className="absolute inset-0 bg-black/70 backdrop-blur-sm"
// //                 onClick={closeFullScreenResult}
// //               />

// //               {/* Result Card - FIXED HEIGHT WITH SCROLL */}
// //               <div className="absolute inset-0 flex items-center justify-center p-4">
// //                 <motion.div
// //                   initial={{ scale: 0.8, y: 20 }}
// //                   animate={{ scale: 1, y: 0 }}
// //                   exit={{ scale: 0.8, y: 20 }}
// //                   className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden"
// //                 >
// //                   {/* Close Button */}
// //                   <button
// //                     onClick={closeFullScreenResult}
// //                     className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
// //                   >
// //                     <X className="h-5 w-5 text-gray-700" />
// //                   </button>

// //                   <div className="flex-1 overflow-y-auto">
// //                     {error ? (
// //                       // Error State - SCROLLABLE CONTENT
// //                       <div className="bg-gradient-to-b from-red-50 to-white p-6">
// //                         <div className="flex flex-col items-center text-center">
// //                           <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
// //                             <AlertCircle className="h-10 w-10 text-red-600" />
// //                           </div>
// //                           <h2 className="text-2xl font-bold text-gray-900 mb-2">
// //                             Invalid Ticket
// //                           </h2>
// //                           <p className="text-red-600 text-lg font-medium mb-6">
// //                             {error}
// //                           </p>
// //                           <div className="bg-red-50 rounded-xl p-4 w-full mb-6">
// //                             <h3 className="font-semibold text-gray-900 mb-3">
// //                               Possible Reasons:
// //                             </h3>
// //                             <ul className="text-gray-700 text-sm space-y-2 text-left">
// //                               <li className="flex items-start">
// //                                 <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
// //                                 Ticket has already been used
// //                               </li>
// //                               <li className="flex items-start">
// //                                 <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
// //                                 Invalid QR code format
// //                               </li>
// //                               <li className="flex items-start">
// //                                 <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
// //                                 Ticket has been cancelled
// //                               </li>
// //                             </ul>
// //                           </div>
// //                           <Button
// //                             onClick={() => {
// //                               setError(null);
// //                               setShowFullScreenResult(false);
// //                             }}
// //                             className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-lg hover:shadow-xl"
// //                           >
// //                             Try Again
// //                           </Button>
// //                         </div>
// //                       </div>
// //                     ) : (
// //                       // Success State - SCROLLABLE CONTENT
// //                       <div className="bg-gradient-to-b from-emerald-50 to-white">
// //                         {/* Header - FIXED HEIGHT */}
// //                         <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-6 text-center sticky top-0 z-10">
// //                           <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
// //                             <CheckCircle className="h-8 w-8 text-white" />
// //                           </div>
// //                           <h2 className="text-2xl font-bold text-white mb-1">
// //                             Ticket Verified!
// //                           </h2>
// //                           <p className="text-emerald-100 text-sm">
// //                             Ready for check-in
// //                           </p>
// //                         </div>

// //                         {/* Ticket Details - SCROLLABLE SECTION */}
// //                         <div className="p-6 space-y-4">
// //                           {/* User Info */}
// //                           <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-xl">
// //                             <div className="p-2 bg-blue-100 rounded-lg">
// //                               <User className="h-5 w-5 text-blue-600" />
// //                             </div>
// //                             <div className="flex-1 min-w-0">
// //                               <h3 className="font-semibold text-gray-900 text-sm mb-1">
// //                                 Attendee
// //                               </h3>
// //                               <p className="text-gray-900 font-medium truncate">
// //                                 {scanResult?.user?.name}
// //                               </p>
// //                               <p className="text-xs text-gray-600 truncate">
// //                                 {scanResult?.user?.email}
// //                               </p>
// //                             </div>
// //                           </div>

// //                           {/* Event Info */}
// //                           <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-xl">
// //                             <div className="p-2 bg-purple-100 rounded-lg">
// //                               <Calendar className="h-5 w-5 text-purple-600" />
// //                             </div>
// //                             <div className="flex-1 min-w-0">
// //                               <h3 className="font-semibold text-gray-900 text-sm mb-1">
// //                                 Event
// //                               </h3>
// //                               <p className="text-gray-900 font-medium truncate">
// //                                 {scanResult?.event?.title}
// //                               </p>
// //                               <div className="flex items-center mt-1 text-xs text-gray-600">
// //                                 <Clock className="h-3 w-3 mr-1" />
// //                                 {scanResult?.event?.date}
// //                               </div>
// //                             </div>
// //                           </div>

// //                           {/* Location */}
// //                           <div className="flex items-start space-x-3 p-3 bg-amber-50 rounded-xl">
// //                             <div className="p-2 bg-amber-100 rounded-lg">
// //                               <MapPin className="h-5 w-5 text-amber-600" />
// //                             </div>
// //                             <div className="flex-1 min-w-0">
// //                               <h3 className="font-semibold text-gray-900 text-sm mb-1">
// //                                 Venue
// //                               </h3>
// //                               <p className="text-gray-900 text-sm truncate">
// //                                 {scanResult?.event?.location || "Venue details"}
// //                               </p>
// //                             </div>
// //                           </div>

// //                           {/* Ticket Details */}
// //                           <div className="flex items-start space-x-3 p-3 bg-indigo-50 rounded-xl">
// //                             <div className="p-2 bg-indigo-100 rounded-lg">
// //                               <Ticket className="h-5 w-5 text-indigo-600" />
// //                             </div>
// //                             <div className="flex-1 min-w-0">
// //                               <h3 className="font-semibold text-gray-900 text-sm mb-1">
// //                                 Ticket Details
// //                               </h3>
// //                               <div className="flex justify-between items-center">
// //                                 <div className="min-w-0">
// //                                   <p className="text-gray-900 font-medium truncate">
// //                                     {scanResult?.ticket?.name}
// //                                   </p>
// //                                   <p className="text-xs text-gray-600">
// //                                     Status: {scanResult?.booking?.status}
// //                                   </p>
// //                                 </div>
// //                                 <div className="text-right ml-2">
// //                                   <p className="text-base font-bold text-indigo-700">
// //                                     ₹{scanResult?.ticket?.price}
// //                                   </p>
// //                                   <p className="text-xs text-gray-600">
// //                                     Paid
// //                                   </p>
// //                                 </div>
// //                               </div>
// //                             </div>
// //                           </div>

// //                           {/* Check-in Status */}
// //                           <div className={`p-3 rounded-xl ${scanResult?.booking?.checked_in ? 'bg-green-50' : 'bg-yellow-50'}`}>
// //                             <div className="flex items-center justify-between">
// //                               <div className="flex items-center min-w-0">
// //                                 <div className={`p-1.5 rounded-lg ${scanResult?.booking?.checked_in ? 'bg-green-100' : 'bg-yellow-100'}`}>
// //                                   {scanResult?.booking?.checked_in ? (
// //                                     <CheckCircle className="h-4 w-4 text-green-600" />
// //                                   ) : (
// //                                     <Clock className="h-4 w-4 text-yellow-600" />
// //                                   )}
// //                                 </div>
// //                                 <div className="ml-2 min-w-0">
// //                                   <h3 className="font-semibold text-gray-900 text-sm">
// //                                     Check-in Status
// //                                   </h3>
// //                                   <p className={`text-xs font-medium truncate ${scanResult?.booking?.checked_in ? 'text-green-700' : 'text-yellow-700'}`}>
// //                                     {scanResult?.booking?.checked_in ? 'Already Checked In' : 'Pending Check-in'}
// //                                   </p>
// //                                 </div>
// //                               </div>
// //                               {scanResult?.booking?.checked_in && (
// //                                 <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-semibold rounded-full whitespace-nowrap ml-2">
// //                                   ✓ Done
// //                                 </span>
// //                               )}
// //                             </div>
// //                           </div>

// //                           {/* Action Buttons - STICKY AT BOTTOM */}
// //                           <div className="sticky bottom-0 bg-white pt-4 pb-2 -mx-6 px-6">
// //                             {!scanResult?.booking?.checked_in ? (
// //                               <Button
// //                                 onClick={handleCheckIn}
// //                                 disabled={loading}
// //                                 className="w-full py-3 text-base rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
// //                               >
// //                                 {loading ? (
// //                                   <>
// //                                     <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
// //                                     Processing...
// //                                   </>
// //                                 ) : (
// //                                   <>
// //                                     <CheckCircle className="mr-2 h-4 w-4" />
// //                                     Confirm Check-in
// //                                   </>
// //                                 )}
// //                               </Button>
// //                             ) : (
// //                               <div className="text-center py-3 bg-green-50 rounded-xl">
// //                                 <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
// //                                 <h3 className="text-base font-bold text-green-800 mb-1">
// //                                   Successfully Checked In!
// //                                 </h3>
// //                                 <p className="text-green-600 text-sm">
// //                                   Attendee has been registered for the event
// //                                 </p>
// //                               </div>
// //                             )}
                            
// //                             <Button
// //                               variant="outline"
// //                               onClick={closeFullScreenResult}
// //                               className="w-full py-2.5 text-base rounded-xl border-2 mt-3"
// //                             >
// //                               {scanResult?.booking?.checked_in ? 'Close' : 'Cancel'}
// //                             </Button>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     )}
// //                   </div>
// //                 </motion.div>
// //               </div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>

// //         {/* Loading Overlay */}
// //         {loading && (
// //           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
// //             <div className="bg-white p-6 rounded-2xl shadow-2xl text-center max-w-xs">
// //               <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
// //               <h3 className="text-base font-semibold text-gray-900 mb-1">
// //                 Verifying Ticket
// //               </h3>
// //               <p className="text-gray-600 text-sm">
// //                 Please wait while we validate the QR code...
// //               </p>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default QrScanner;
// "use client";

// import axios from "axios";
// import { AnimatePresence, motion } from "framer-motion";
// import { Howl } from "howler";
// import { Html5Qrcode } from "html5-qrcode";
// import {
//   AlertCircle,
//   Calendar,
//   CheckCircle,
//   Clock,
//   MapPin,
//   Smartphone,
//   Ticket,
//   User,
//   X,
// } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import Confetti from "react-confetti";
// import { Button } from "../../components/Layout/ui/button";

// const QrScanner = () => {
//   const [scannerOpen, setScannerOpen] = useState(false);
//   const [scanResult, setScanResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [processingScan, setProcessingScan] = useState(false);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [flash, setFlash] = useState(false);
//   const [showFullScreenResult, setShowFullScreenResult] = useState(false);
//   const scannerRef = useRef(null);
//   const modalRef = useRef(null);

//   // Sounds
//   const successSound = new Howl({ src: ["/sounds/success.mp3"] });
//   const errorSound = new Howl({ src: ["/sounds/error.mp3"] });
//   const beepSound = new Howl({ src: ["/sounds/beep.mp3"] });

//   useEffect(() => {
//     let html5QrcodeScanner;

//     const startScanner = async () => {
//       if (!scannerOpen || !scannerRef.current) return;

//       html5QrcodeScanner = new Html5Qrcode("qr-reader");

//       try {
//         await html5QrcodeScanner.start(
//           { facingMode: "environment" },
//           { fps: 10, qrbox: 250 },
//           async (decodedText) => {
//             if (processingScan) return;
//             setProcessingScan(true);

//             beepSound.play();
//             setFlash(true);
//             setTimeout(() => setFlash(false), 100);

//             try {
//               if (html5QrcodeScanner && html5QrcodeScanner.getState() === 2) {
//                 await html5QrcodeScanner.stop();
//               }
//               setScannerOpen(false);

//               setLoading(true);
//               setError(null);

//               const res = await axios.post(
//                 "http://localhost:8000/api/verify-qr",
//                 { qr_code: decodedText }
//               );

//               const data = res.data.data;

//               if (data.booking.checked_in) {
//                 setError("Ticket already checked in!");
//                 errorSound.play();
//                 setScanResult(null);
//               } else {
//                 setScanResult(data);
//                 successSound.play();
//                 setShowConfetti(true);
//                 setShowFullScreenResult(true);
//                 setTimeout(() => setShowConfetti(false), 3000);
//               }
//             } catch (err) {
//               console.error(err);
//               setError(
//                 err.response?.data?.message || "Invalid or inactive ticket."
//               );
//               errorSound.play();
//               setScanResult(null);
//               setShowFullScreenResult(true);
//             } finally {
//               setLoading(false);
//               setProcessingScan(false);
//             }
//           },
//           (errorMessage) => {
//             console.warn("QR scan error:", errorMessage);
//           }
//         );
//       } catch (err) {
//         console.error("Unable to start scanning:", err);
//       }
//     };

//     startScanner();

//     return () => {
//       if (
//         html5QrcodeScanner &&
//         html5QrcodeScanner.getState &&
//         html5QrcodeScanner.getState() === 2
//       ) {
//         html5QrcodeScanner.stop().catch(() => {});
//       }
//     };
//   }, [scannerOpen, processingScan]);

//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     if (showFullScreenResult || scannerOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [showFullScreenResult, scannerOpen]);

//   const handleCheckIn = async () => {
//     if (!scanResult) return;

//     try {
//       setLoading(true);
//       const res = await axios.post("http://localhost:8000/api/check-in", {
//         qr_code: scanResult.booking.qr_code,
//       });

//       // Update scan result
//       setScanResult({
//         ...scanResult,
//         booking: { ...scanResult.booking, checked_in: true },
//       });
      
//       // Show success notification
//       successSound.play();
      
//     } catch (err) {
//       alert(err.response?.data?.message || "Check-in failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const closeFullScreenResult = () => {
//     setShowFullScreenResult(false);
//     setError(null);
//     if (scanResult?.booking?.checked_in) {
//       setScanResult(null);
//     }
//   };

//   return (
//     <>
//       {showConfetti && <Confetti numberOfPieces={200} recycle={false} />}
      
//       {/* Main Content Area - NO FIXED POSITIONING */}
//       <div className="p-6">
//         {/* Scanner Button */}
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-center mb-8"
//         >
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             QR Code Scanner
//           </h1>
//           <p className="text-gray-600 mb-6 max-w-md mx-auto">
//             Scan attendee tickets for quick and easy check-in
//           </p>
//           <Button
//             onClick={() => setScannerOpen(true)}
//             className="px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
//             size="lg"
//           >
//             <Smartphone className="mr-2 h-5 w-5" />
//             Open Scanner
//           </Button>
//         </motion.div>

//         {/* Scanner Modal */}
//         <AnimatePresence>
//           {scannerOpen && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
//             >
//               {flash && (
//                 <div className="absolute inset-0 bg-white opacity-90 pointer-events-none z-[101]" />
//               )}
              
//               <div className="relative w-full max-w-lg mx-4">
//                 {/* Scanner View */}
//                 <div className="relative overflow-hidden rounded-2xl">
//                   <div id="qr-reader" ref={scannerRef} className="w-full h-80" />
                  
//                   {/* Scanner Overlay */}
//                   <div className="absolute inset-0 pointer-events-none">
//                     <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-green-400 rounded-lg animate-pulse"></div>
//                     <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
//                       <div className="w-64 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse mb-2"></div>
//                       <p className="text-sm font-semibold">Align QR code within frame</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 text-center">
//                   <Button
//                     variant="outline"
//                     onClick={() => setScannerOpen(false)}
//                     className="px-6 py-3 border-2 rounded-xl text-white hover:bg-white/20"
//                   >
//                     Cancel Scan
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Full Screen Result Modal */}
//         <AnimatePresence>
//           {showFullScreenResult && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-[200]"
//             >
//               {/* Backdrop */}
//               <div
//                 className="absolute inset-0 bg-black/70 backdrop-blur-sm"
//                 onClick={closeFullScreenResult}
//               />

//               {/* Result Card */}
//               <div className="absolute inset-0 flex items-center justify-center p-4">
//                 <motion.div
//                   initial={{ scale: 0.8, y: 20 }}
//                   animate={{ scale: 1, y: 0 }}
//                   exit={{ scale: 0.8, y: 20 }}
//                   ref={modalRef}
//                   className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col overflow-hidden"
//                 >
//                   {/* Close Button */}
//                   <button
//                     onClick={closeFullScreenResult}
//                     className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
//                   >
//                     <X className="h-5 w-5 text-gray-700" />
//                   </button>

//                   <div className="flex-1 overflow-y-auto">
//                     {error ? (
//                       // Error State
//                       <div className="bg-gradient-to-b from-red-50 to-white p-6">
//                         <div className="flex flex-col items-center text-center">
//                           <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
//                             <AlertCircle className="h-10 w-10 text-red-600" />
//                           </div>
//                           <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                             Invalid Ticket
//                           </h2>
//                           <p className="text-red-600 text-lg font-medium mb-6">
//                             {error}
//                           </p>
//                           <div className="bg-red-50 rounded-xl p-4 w-full mb-6">
//                             <h3 className="font-semibold text-gray-900 mb-3">
//                               Possible Reasons:
//                             </h3>
//                             <ul className="text-gray-700 text-sm space-y-2 text-left">
//                               <li className="flex items-start">
//                                 <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
//                                 Ticket has already been used
//                               </li>
//                               <li className="flex items-start">
//                                 <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
//                                 Invalid QR code format
//                               </li>
//                               <li className="flex items-start">
//                                 <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
//                                 Ticket has been cancelled
//                               </li>
//                             </ul>
//                           </div>
//                           <Button
//                             onClick={() => {
//                               setError(null);
//                               setShowFullScreenResult(false);
//                             }}
//                             className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-lg hover:shadow-xl"
//                           >
//                             Try Again
//                           </Button>
//                         </div>
//                       </div>
//                     ) : (
//                       // Success State
//                       <div className="bg-gradient-to-b from-emerald-50 to-white">
//                         {/* Header */}
//                         <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-6 text-center sticky top-0 z-10">
//                           <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
//                             <CheckCircle className="h-8 w-8 text-white" />
//                           </div>
//                           <h2 className="text-2xl font-bold text-white mb-1">
//                             Ticket Verified!
//                           </h2>
//                           <p className="text-emerald-100 text-sm">
//                             Ready for check-in
//                           </p>
//                         </div>

//                         {/* Ticket Details */}
//                         <div className="p-6 space-y-4">
//                           {/* User Info */}
//                           <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-xl">
//                             <div className="p-2 bg-blue-100 rounded-lg">
//                               <User className="h-5 w-5 text-blue-600" />
//                             </div>
//                             <div className="flex-1 min-w-0">
//                               <h3 className="font-semibold text-gray-900 text-sm mb-1">
//                                 Attendee
//                               </h3>
//                               <p className="text-gray-900 font-medium truncate">
//                                 {scanResult?.user?.name}
//                               </p>
//                               <p className="text-xs text-gray-600 truncate">
//                                 {scanResult?.user?.email}
//                               </p>
//                             </div>
//                           </div>

//                           {/* Event Info */}
//                           <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-xl">
//                             <div className="p-2 bg-purple-100 rounded-lg">
//                               <Calendar className="h-5 w-5 text-purple-600" />
//                             </div>
//                             <div className="flex-1 min-w-0">
//                               <h3 className="font-semibold text-gray-900 text-sm mb-1">
//                                 Event
//                               </h3>
//                               <p className="text-gray-900 font-medium truncate">
//                                 {scanResult?.event?.title}
//                               </p>
//                               <div className="flex items-center mt-1 text-xs text-gray-600">
//                                 <Clock className="h-3 w-3 mr-1" />
//                                 {scanResult?.event?.date}
//                               </div>
//                             </div>
//                           </div>

//                           {/* Location */}
//                           <div className="flex items-start space-x-3 p-3 bg-amber-50 rounded-xl">
//                             <div className="p-2 bg-amber-100 rounded-lg">
//                               <MapPin className="h-5 w-5 text-amber-600" />
//                             </div>
//                             <div className="flex-1 min-w-0">
//                               <h3 className="font-semibold text-gray-900 text-sm mb-1">
//                                 Venue
//                               </h3>
//                               <p className="text-gray-900 text-sm truncate">
//                                 {scanResult?.event?.location || "Venue details"}
//                               </p>
//                             </div>
//                           </div>

//                           {/* Ticket Details */}
//                           <div className="flex items-start space-x-3 p-3 bg-indigo-50 rounded-xl">
//                             <div className="p-2 bg-indigo-100 rounded-lg">
//                               <Ticket className="h-5 w-5 text-indigo-600" />
//                             </div>
//                             <div className="flex-1 min-w-0">
//                               <h3 className="font-semibold text-gray-900 text-sm mb-1">
//                                 Ticket Details
//                               </h3>
//                               <div className="flex justify-between items-center">
//                                 <div className="min-w-0">
//                                   <p className="text-gray-900 font-medium truncate">
//                                     {scanResult?.ticket?.name}
//                                   </p>
//                                   <p className="text-xs text-gray-600">
//                                     Status: {scanResult?.booking?.status}
//                                   </p>
//                                 </div>
//                                 <div className="text-right ml-2">
//                                   <p className="text-base font-bold text-indigo-700">
//                                     ₹{scanResult?.ticket?.price}
//                                   </p>
//                                   <p className="text-xs text-gray-600">
//                                     Paid
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           {/* Check-in Status */}
//                           <div className={`p-3 rounded-xl ${scanResult?.booking?.checked_in ? 'bg-green-50' : 'bg-yellow-50'}`}>
//                             <div className="flex items-center justify-between">
//                               <div className="flex items-center min-w-0">
//                                 <div className={`p-1.5 rounded-lg ${scanResult?.booking?.checked_in ? 'bg-green-100' : 'bg-yellow-100'}`}>
//                                   {scanResult?.booking?.checked_in ? (
//                                     <CheckCircle className="h-4 w-4 text-green-600" />
//                                   ) : (
//                                     <Clock className="h-4 w-4 text-yellow-600" />
//                                   )}
//                                 </div>
//                                 <div className="ml-2 min-w-0">
//                                   <h3 className="font-semibold text-gray-900 text-sm">
//                                     Check-in Status
//                                   </h3>
//                                   <p className={`text-xs font-medium truncate ${scanResult?.booking?.checked_in ? 'text-green-700' : 'text-yellow-700'}`}>
//                                     {scanResult?.booking?.checked_in ? 'Already Checked In' : 'Pending Check-in'}
//                                   </p>
//                                 </div>
//                               </div>
//                               {scanResult?.booking?.checked_in && (
//                                 <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-semibold rounded-full whitespace-nowrap ml-2">
//                                   ✓ Done
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="sticky bottom-0 bg-white pt-4 pb-6 px-6 border-t border-gray-100">
//                           {!scanResult?.booking?.checked_in ? (
//                             <Button
//                               onClick={handleCheckIn}
//                               disabled={loading}
//                               className="w-full py-3 text-base rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
//                             >
//                               {loading ? (
//                                 <>
//                                   <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                                   Processing...
//                                 </>
//                               ) : (
//                                 <>
//                                   <CheckCircle className="mr-2 h-4 w-4" />
//                                   Confirm Check-in
//                                 </>
//                               )}
//                             </Button>
//                           ) : (
//                             <div className="text-center py-3 bg-green-50 rounded-xl">
//                               <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
//                               <h3 className="text-base font-bold text-green-800 mb-1">
//                                 Successfully Checked In!
//                               </h3>
//                               <p className="text-green-600 text-sm">
//                                 Attendee has been registered for the event
//                               </p>
//                             </div>
//                           )}
                          
//                           <Button
//                             variant="outline"
//                             onClick={closeFullScreenResult}
//                             className="w-full py-2.5 text-base rounded-xl border-2 mt-3"
//                           >
//                             {scanResult?.booking?.checked_in ? 'Close' : 'Cancel'}
//                           </Button>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Loading Overlay */}
//         {loading && (
//           <div className="fixed inset-0 z-[300] bg-black/50 flex items-center justify-center">
//             <div className="bg-white p-6 rounded-2xl shadow-2xl text-center max-w-xs">
//               <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
//               <h3 className="text-base font-semibold text-gray-900 mb-1">
//                 Verifying Ticket
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Please wait while we validate the QR code...
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default QrScanner;
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Howl } from "howler";
import { Html5Qrcode } from "html5-qrcode";
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  MapPin,
  Smartphone,
  Ticket,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import { Button } from "../../components/Layout/ui/button";
import { eventService } from "../../services/eventService";

const QrScanner = () => {
  const [scannerOpen, setScannerOpen] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [processingScan, setProcessingScan] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [flash, setFlash] = useState(false);
  const [showFullScreenResult, setShowFullScreenResult] = useState(false);
  const scannerRef = useRef(null);
  const modalRef = useRef(null);

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

            beepSound.play();
            setFlash(true);
            setTimeout(() => setFlash(false), 100);

            try {
              if (html5QrcodeScanner && html5QrcodeScanner.getState() === 2) {
                await html5QrcodeScanner.stop();
              }
              setScannerOpen(false);

              setLoading(true);
              setError(null);

              // Use eventService for API call
              const response = await eventService.verifyQRCode(decodedText);
              const data = response.data.data;

              if (data.booking.checked_in) {
                setError("Ticket already checked in!");
                errorSound.play();
                setScanResult(null);
              } else {
                setScanResult(data);
                successSound.play();
                setShowConfetti(true);
                setShowFullScreenResult(true);
                setTimeout(() => setShowConfetti(false), 3000);
              }
            } catch (err) {
              console.error(err);
              setError(
                err.response?.data?.message || "Invalid or inactive ticket."
              );
              errorSound.play();
              setScanResult(null);
              setShowFullScreenResult(true);
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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showFullScreenResult || scannerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showFullScreenResult, scannerOpen]);

  const handleCheckIn = async () => {
    if (!scanResult) return;

    try {
      setLoading(true);
      
      // Use eventService for check-in
      const response = await eventService.checkInAttendee(scanResult.booking.qr_code);
      
      // Update scan result
      setScanResult({
        ...scanResult,
        booking: { ...scanResult.booking, checked_in: true },
      });
      
      // Show success notification
      successSound.play();
      
      // You can also show a toast notification here if you have a toast system
      console.log("Check-in successful:", response.data.message);
      
    } catch (err) {
      console.error("Check-in failed:", err);
      setError(err.response?.data?.message || "Check-in failed");
    } finally {
      setLoading(false);
    }
  };

  const closeFullScreenResult = () => {
    setShowFullScreenResult(false);
    setError(null);
    if (scanResult?.booking?.checked_in) {
      setScanResult(null);
    }
  };

  // Format date if needed
  const formatDate = (dateString) => {
    if (!dateString) return "Date not specified";
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      {showConfetti && <Confetti numberOfPieces={200} recycle={false} />}
      
      {/* Main Content Area */}
      <div className="p-6">
        {/* Scanner Button */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            QR Code Scanner
          </h1>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Scan attendee tickets for quick and easy check-in
          </p>
          <Button
            onClick={() => setScannerOpen(true)}
            className="px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            <Smartphone className="mr-2 h-5 w-5" />
            Open Scanner
          </Button>
        </motion.div>

        {/* Scanner Modal */}
        <AnimatePresence>
          {scannerOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
            >
              {flash && (
                <div className="absolute inset-0 bg-white opacity-90 pointer-events-none z-[101]" />
              )}
              
              <div className="relative w-full max-w-lg mx-4">
                {/* Scanner View */}
                <div className="relative overflow-hidden rounded-2xl">
                  <div id="qr-reader" ref={scannerRef} className="w-full h-80" />
                  
                  {/* Scanner Overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-green-400 rounded-lg animate-pulse"></div>
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                      <div className="w-64 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse mb-2"></div>
                      <p className="text-sm font-semibold">Align QR code within frame</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Button
                    variant="outline"
                    onClick={() => setScannerOpen(false)}
                    className="px-6 py-3 border-2 rounded-xl text-white hover:bg-white/20"
                  >
                    Cancel Scan
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full Screen Result Modal */}
        <AnimatePresence>
          {showFullScreenResult && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200]"
            >
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={closeFullScreenResult}
              />

              {/* Result Card */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <motion.div
                  initial={{ scale: 0.8, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.8, y: 20 }}
                  ref={modalRef}
                  className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col overflow-hidden"
                >
                  {/* Close Button */}
                  <button
                    onClick={closeFullScreenResult}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-700" />
                  </button>

                  <div className="flex-1 overflow-y-auto">
                    {error ? (
                      // Error State
                      <div className="bg-gradient-to-b from-red-50 to-white p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                            <AlertCircle className="h-10 w-10 text-red-600" />
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Invalid Ticket
                          </h2>
                          <p className="text-red-600 text-lg font-medium mb-6">
                            {error}
                          </p>
                          <div className="bg-red-50 rounded-xl p-4 w-full mb-6">
                            <h3 className="font-semibold text-gray-900 mb-3">
                              Possible Reasons:
                            </h3>
                            <ul className="text-gray-700 text-sm space-y-2 text-left">
                              <li className="flex items-start">
                                <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                Ticket has already been used
                              </li>
                              <li className="flex items-start">
                                <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                Invalid QR code format
                              </li>
                              <li className="flex items-start">
                                <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                Ticket has been cancelled
                              </li>
                              <li className="flex items-start">
                                <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                Event has ended or is inactive
                              </li>
                            </ul>
                          </div>
                          <Button
                            onClick={() => {
                              setError(null);
                              setShowFullScreenResult(false);
                            }}
                            className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-lg hover:shadow-xl"
                          >
                            Try Again
                          </Button>
                        </div>
                      </div>
                    ) : (
                      // Success State
                      <div className="bg-gradient-to-b from-emerald-50 to-white">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-6 text-center sticky top-0 z-10">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <CheckCircle className="h-8 w-8 text-white" />
                          </div>
                          <h2 className="text-2xl font-bold text-white mb-1">
                            Ticket Verified!
                          </h2>
                          <p className="text-emerald-100 text-sm">
                            Ready for check-in
                          </p>
                        </div>

                        {/* Ticket Details */}
                        <div className="p-6 space-y-4">
                          {/* User Info */}
                          <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-xl">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <User className="h-5 w-5 text-blue-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                                Attendee
                              </h3>
                              <p className="text-gray-900 font-medium truncate">
                                {scanResult?.user?.name}
                              </p>
                              <p className="text-xs text-gray-600 truncate">
                                {scanResult?.user?.email}
                              </p>
                            </div>
                          </div>

                          {/* Event Info */}
                          <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-xl">
                            <div className="p-2 bg-purple-100 rounded-lg">
                              <Calendar className="h-5 w-5 text-purple-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                                Event
                              </h3>
                              <p className="text-gray-900 font-medium truncate">
                                {scanResult?.event?.title}
                              </p>
                              <div className="flex items-center mt-1 text-xs text-gray-600">
                                <Clock className="h-3 w-3 mr-1" />
                                {scanResult?.event?.date ? formatDate(scanResult.event.date) : 'Date not specified'}
                              </div>
                            </div>
                          </div>

                          {/* Location */}
                          <div className="flex items-start space-x-3 p-3 bg-amber-50 rounded-xl">
                            <div className="p-2 bg-amber-100 rounded-lg">
                              <MapPin className="h-5 w-5 text-amber-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                                Venue
                              </h3>
                              <p className="text-gray-900 text-sm truncate">
                                {scanResult?.event?.location || "Venue details not specified"}
                              </p>
                            </div>
                          </div>

                          {/* Ticket Details */}
                          <div className="flex items-start space-x-3 p-3 bg-indigo-50 rounded-xl">
                            <div className="p-2 bg-indigo-100 rounded-lg">
                              <Ticket className="h-5 w-5 text-indigo-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                                Ticket Details
                              </h3>
                              <div className="flex justify-between items-center">
                                <div className="min-w-0">
                                  <p className="text-gray-900 font-medium truncate">
                                    {scanResult?.ticket?.name || "General Admission"}
                                  </p>
                                  <p className="text-xs text-gray-600 capitalize">
                                    Status: {scanResult?.booking?.status?.toLowerCase() || "active"}
                                  </p>
                                </div>
                                <div className="text-right ml-2">
                                  <p className="text-base font-bold text-indigo-700">
                                    ₹{scanResult?.ticket?.price || "0"}
                                  </p>
                                  <p className="text-xs text-gray-600">
                                    {scanResult?.booking?.payment_status === "paid" ? "Paid" : "Payment Pending"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Check-in Status */}
                          <div className={`p-3 rounded-xl ${scanResult?.booking?.checked_in ? 'bg-green-50' : 'bg-yellow-50'}`}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center min-w-0">
                                <div className={`p-1.5 rounded-lg ${scanResult?.booking?.checked_in ? 'bg-green-100' : 'bg-yellow-100'}`}>
                                  {scanResult?.booking?.checked_in ? (
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                  ) : (
                                    <Clock className="h-4 w-4 text-yellow-600" />
                                  )}
                                </div>
                                <div className="ml-2 min-w-0">
                                  <h3 className="font-semibold text-gray-900 text-sm">
                                    Check-in Status
                                  </h3>
                                  <p className={`text-xs font-medium truncate ${scanResult?.booking?.checked_in ? 'text-green-700' : 'text-yellow-700'}`}>
                                    {scanResult?.booking?.checked_in ? 'Already Checked In' : 'Pending Check-in'}
                                  </p>
                                </div>
                              </div>
                              {scanResult?.booking?.checked_in && (
                                <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-semibold rounded-full whitespace-nowrap ml-2">
                                  ✓ Done
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="sticky bottom-0 bg-white pt-4 pb-6 px-6 border-t border-gray-100">
                          {!scanResult?.booking?.checked_in ? (
                            <Button
                              onClick={handleCheckIn}
                              disabled={loading}
                              className="w-full py-3 text-base rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                            >
                              {loading ? (
                                <>
                                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                  Processing...
                                </>
                              ) : (
                                <>
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Confirm Check-in
                                </>
                              )}
                            </Button>
                          ) : (
                            <div className="text-center py-3 bg-green-50 rounded-xl">
                              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                              <h3 className="text-base font-bold text-green-800 mb-1">
                                Successfully Checked In!
                              </h3>
                              <p className="text-green-600 text-sm">
                                Attendee has been registered for the event
                              </p>
                            </div>
                          )}
                          
                          <Button
                            variant="outline"
                            onClick={closeFullScreenResult}
                            className="w-full py-2.5 text-base rounded-xl border-2 mt-3"
                          >
                            {scanResult?.booking?.checked_in ? 'Close' : 'Cancel'}
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading Overlay */}
        {loading && (
          <div className="fixed inset-0 z-[300] bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-2xl text-center max-w-xs">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Verifying Ticket
              </h3>
              <p className="text-gray-600 text-sm">
                Please wait while we validate the QR code...
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default QrScanner;