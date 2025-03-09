export function Requirements() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Minimum Requirements</h2>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex border-b">
          <button className="px-6 py-3 bg-gray-900 text-white">Windows</button>
          <button className="px-6 py-3 text-gray-700">MacOS</button>
        </div>
        <div className="p-6">
          <table className="w-full">
            <tbody>
              <tr className="border-b">
                <td className="py-4 font-medium">Windows Operating System</td>
                <td className="py-4 text-gray-600">10 atau 11</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 font-medium">CPU</td>
                <td className="py-4 text-gray-600">Intel atau AMD</td>
              </tr>
              <tr>
                <td className="py-4 font-medium">System Memory (RAM)</td>
                <td className="py-4 text-gray-600">4GB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}