import FeaturePreview from "./FeaturePreview";
import WaitlistSignupButton from "./WaitlistSignupButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white dark:bg-black p-6 font-sans">
      <header className="w-full max-w-2xl mx-auto py-12 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-3 tracking-tight text-gray-900 dark:text-gray-100">Mosh</h1>
        <p className="text-base text-center text-gray-500 dark:text-gray-400 mb-7 max-w-md font-normal">
          Mosh makes your phone dumber and your habits smarter.
        </p>
        <WaitlistSignupButton />
      </header>
      <main className="w-full max-w-3xl mx-auto flex-1 flex flex-col items-center justify-center">
        <FeaturePreview />
      </main>
      <footer className="w-full max-w-2xl mx-auto py-6 text-center text-gray-300 text-xs tracking-wide">
        &copy; {new Date().getFullYear()} Mosh
      </footer>
    </div>
  );
}
