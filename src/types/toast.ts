interface Toast {
  id: string;
  message: string;
  duration?: number;
  type?: Type;
}

type Type = 'success' | 'error';

export type { Toast, Type };
