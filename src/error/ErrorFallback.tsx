interface ErrorFallbackProps {
	error: Error;
	resetErrorBoundary: () => void;
}

export const ErrorFallback = ({
	error,
	resetErrorBoundary,
}: ErrorFallbackProps) => (
	<div className='min-h-screen flex items-center justify-center' role='alert'>
		<div className='text-center'>
			<h2 className='text-xl font-semibold text-gray-900 mb-2'>
				An error occurred
			</h2>
			<p className='text-gray-600 mb-4'>{error.message}</p>
			<button
				className='h-10 px-4 text-sm bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600 inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
				onClick={resetErrorBoundary}
			>
				Retry
			</button>
		</div>
	</div>
);
