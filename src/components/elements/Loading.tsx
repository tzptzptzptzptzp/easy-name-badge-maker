import React from "react";

interface LoadingProps {
  message?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  message = "読み込み中...",
}) => {
  return (
    <div className="flex items-center justify-center h-dvh bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        {/* ローディングメッセージ */}
        <div className="animate-floating">
          <p className="text-xl font-bold text-gray-700 mb-4">{message}</p>
          <div className="flex justify-center space-x-2">
            <div
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
