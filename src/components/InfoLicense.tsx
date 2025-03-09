export function InfoLicense() {
  return (
    <section className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="bg-gray-900 text-white rounded-xl p-6">
        <h3 className="font-bold mt-6 mb-4">INFO LISENSI DEVICE MIDGEN:</h3>
        <ul className="space-y-2">
          <li>MidGen Lite 1 Lisensi 1 Device</li>
          <li>MidGen Pro 1 Lisensi 2 Device</li>
        </ul>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h3 className="text-red-600 font-bold mb-4">DISCLAIMER</h3>
        <p className="text-red-600">
          Stockerbuddy Tools digunakan untuk membantu meringankan alur Microstock AI, bukan untuk SPAM!
        </p>
      </div>
    </section>
  );
}