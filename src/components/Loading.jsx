export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-white space-y-4">
            <div className="relative w-16 h-16">
                {/* Spinner 1 - searah jarum jam */}
                <div className="absolute inset-0 w-full h-full border-8 border-primary border-t-transparent border-r-transparent rounded-full animate-spin"></div>

                {/* Spinner 2 - berlawanan arah */}
                <div className="absolute inset-0 w-full h-full border-8 border-secondary border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-700 animate-bounce text-lg">Loading...</p>
        </div>
    );
}