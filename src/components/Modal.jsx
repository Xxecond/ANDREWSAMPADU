"use client";

export default function Modal({ open, message, onConfirm, singleButton = false }) {
  if (!open) return null; // early return if modal is not open

  return (
    <section>
      {/* Dimmed background overlay (unresponsive to clicks) */}
      <div className="fixed bg-black/60 inset-0 z-[100]"></div>

      {/* Modal content */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] max-w-sm rounded-sm bg-blue-900/90 z-[110] space-y-5 ">
        <p className="text-white text-center pt-5">{message}</p>
        <div className="flex justify-around">
          {singleButton ? (
            <button
              className="text-white p-3 w-full hover:bg-blue-500/20 border-t-2 border-white"
              onClick={onConfirm}
            >
              OK
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
