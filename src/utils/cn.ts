import clsx from "clsx";
import { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type { ClassValue };

/**
 * cn関数で使用可能な値の型
 */
export type CNInput = ClassValue;

/**
 * コンポーネントのclassName propsで使用する型
 */
export type ClassName = string | undefined;

/**
 * TailwindCSSクラス名を効率的に結合・統合するユーティリティ関数
 * @param inputs - クラス名、条件付きクラス名、オブジェクト形式のクラス名など
 * @returns 統合されたクラス名文字列
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
