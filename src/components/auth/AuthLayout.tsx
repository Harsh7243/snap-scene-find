
import { Camera } from "lucide-react";
import { Link } from "react-router-dom";

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
};

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center py-16">
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gradient">SnapBook</h1>
            </Link>
            <p className="text-muted-foreground mt-2">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
