import tkinter as tk
import qrcode

def generate_qr():
    url = entry.get().strip()

    if not url:
        status.config(text="Please enter a URL")
        return

    file_path = "A:\\Chitransh\\Desktop\\qrcode.png"

    qr = qrcode.QRCode()
    qr.add_data(url)

    img = qr.make_image()
    img.save(file_path)

    status.config(text="QR Code Generated Successfully!")

root = tk.Tk()
root.title("QR Code Generator")
root.geometry("400x200")

tk.Label(root, text="Enter URL").pack(pady=10)

entry = tk.Entry(root, width=40)
entry.pack()

tk.Button(
    root,
    text="Generate QR",
    command=generate_qr
).pack(pady=10)

status = tk.Label(root, text="")
status.pack()

root.mainloop()