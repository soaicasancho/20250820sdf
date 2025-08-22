self.addEventListener("install", function (event) {
  console.log("✅ Service Worker installed.");
});

self.addEventListener("fetch", function (event) {
  // Dành cho cache nếu cần mở rộng trong tương lai
});