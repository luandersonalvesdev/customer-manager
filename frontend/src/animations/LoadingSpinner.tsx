export default function LoadingSpinner({ className = '' }) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={ `animate-spin rounded-full border-t-2
        border-opacity-50 size-6 ${className}` }
      />
    </div>
  );
}
