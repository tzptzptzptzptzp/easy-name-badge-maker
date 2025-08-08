import React from "react";

export const LimitedAccess: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-dvh bg-gradient-to-br from-red-50 to-orange-100">
      <div className="text-center max-w-md mx-auto p-6">
        {/* 制限アイコン */}
        <div className="mb-6">
          <div className="text-8xl">🚫</div>
        </div>

        {/* メッセージ */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            利用が制限されています
          </h1>
          <p className="text-gray-600 leading-relaxed">
            利用ルールが守られなかったため
            <br />
            サービスをご利用いただけません
          </p>
        </div>
      </div>
    </div>
  );
};
