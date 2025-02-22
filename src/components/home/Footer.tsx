const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {/* Facebook Icon */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>

          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.471-.149-.67.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-1.243-.596-2.065-1.176-2.92-2.206-.248-.31-.021-.48.178-.636.182-.143.397-.357.595-.536.198-.178.264-.297.396-.495.132-.198.066-.371-.033-.52-.1-.149-.892-2.147-1.221-2.938-.317-.77-.64-.666-.892-.676-.231-.009-.495-.01-.759-.01-.264 0-.694.099-1.057.495-.363.396-1.386 1.353-1.386 3.299 0 1.947 1.421 3.826 1.619 4.09.198.264 2.79 4.265 6.805 5.99.954.406 1.702.648 2.283.828.954.264 1.82.227 2.506.137.772-.104 2.38-.973 2.715-1.914.334-.941.334-1.75.233-1.914-.1-.165-.366-.248-.763-.397zM12 2.163c-5.384 0-9.75 4.366-9.75 9.75 0 5.385 4.366 9.75 9.75 9.75 5.385 0 9.75-4.365 9.75-9.75 0-5.384-4.365-9.75-9.75-9.75z" />
            </svg>
          </a>

          {/* Instagram Icon */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.82.896 1.38.166.422.361 1.057.415 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.42.419-.82.679-1.38.896-.422.166-1.057.361-2.227.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.82-.896-1.38-.166-.422-.361-1.057-.415-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.82-.679 1.38-.896.422-.166 1.057-.361 2.227-.415 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.01 7.053.06 5.775.11 4.902.3 4.14.63c-.789.33-1.465.76-2.066 1.36C1.39 2.59.96 3.267.63 4.06.3 4.82.11 5.694.06 6.972.01 8.252 0 8.66 0 12s.01 3.748.06 5.028c.05 1.278.24 2.152.57 2.914.33.789.76 1.465 1.36 2.066.6.6 1.277 1.03 2.066 1.36.762.33 1.636.52 2.914.57 1.28.05 1.688.06 5.028.06s3.748-.01 5.028-.06c1.278-.05 2.152-.24 2.914-.57.789-.33 1.465-.76 2.066-1.36.6-.6 1.03-1.277 1.36-2.066.33-.762.52-1.636.57-2.914.05-1.28.06-1.688.06-5.028s-.01-3.748-.06-5.028c-.05-1.278-.24-2.152-.57-2.914-.33-.789-.76-1.465-1.36-2.066-.6-.6-1.277-1.03-2.066-1.36-.762-.33-1.636-.52-2.914-.57C15.748.01 15.34 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Sourav's Stay. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
