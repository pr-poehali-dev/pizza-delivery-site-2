
import { Button } from "@/components/ui/button";

const AppDownload = () => {
  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Скачайте наше мобильное приложение</h2>
            <p className="text-white/90 text-lg">
              Заказывайте быстрее и получайте эксклюзивные предложения. Доступно для iOS и Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.445 21L14.061 17.615L7 3L19.056 14.445L17.445 21Z" />
                  <path d="M7 3L16.8 16.8L17.4 21L18.1 14.5L7 3Z" fill="currentColor" opacity="0.35" />
                  <path d="M7 3L13.75 7.4L19.05 14.45L7 3Z" fill="currentColor" opacity="0.35" />
                </svg>
                Google Play
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.09 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                App Store
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=400&auto=format&fit=crop" 
              alt="Мобильное приложение"
              className="max-w-[250px] rounded-3xl shadow-2xl transform rotate-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
