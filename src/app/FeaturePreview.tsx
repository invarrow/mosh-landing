export default function FeaturePreview() {
  return (
    <section className="w-full flex flex-col gap-6 items-center">
      <h2 className="text-lg font-medium mb-1 text-center text-gray-800 dark:text-gray-200 tracking-tight">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5 flex flex-col items-center min-h-[110px]">
          <span className="text-2xl mb-2">📱</span>
          <h3 className="font-semibold mb-1 text-center text-gray-900 dark:text-gray-100 text-base">Dumb Phone</h3>
          <p className="text-gray-400 dark:text-gray-400 text-center text-xs">Make your phone dumber by making it smarter.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5 flex flex-col items-center min-h-[110px]">
          <span className="text-2xl mb-2">🎯</span>
          <h3 className="font-semibold mb-1 text-center text-gray-900 dark:text-gray-100 text-base">Track Goals</h3>
          <p className="text-gray-400 dark:text-gray-400 text-center text-xs">Set, track, and achieve your daily goals.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5 flex flex-col items-center min-h-[110px]">
          <span className="text-2xl mb-2">🚫</span>
          <h3 className="font-semibold mb-1 text-center text-gray-900 dark:text-gray-100 text-base">Block Distractions</h3>
          <p className="text-gray-400 dark:text-gray-400 text-center text-xs">Keep distractions out, stay focused.</p>
        </div>
      </div>
    </section>
  );
} 