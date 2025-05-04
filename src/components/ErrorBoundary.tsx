import React, { Component, ErrorInfo, ReactNode } from "react";
import { PackageX } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="text-center py-12">
            <div className="flex flex-col items-center justify-center space-y-4">
              <PackageX size={64} className="text-gray-400" />
              <p className="text-xl font-medium text-gray-600">
                Something went wrong
              </p>
              <p className="text-gray-500">
                Please try refreshing the page or contact support if the problem
                persists
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-gbi-700 text-white rounded-md hover:bg-gbi-800 transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
