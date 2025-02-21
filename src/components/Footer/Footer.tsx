export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Job Listing. All rights reserved.</p>
        <p>Created by Job Listing Team</p>
      </div>
    </footer>
  );
};
