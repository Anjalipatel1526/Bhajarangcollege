import { Loader2 } from "lucide-react";

const PageLoader = () => {
    return (
        <div className="flex items-center justify-center min-h-[50vh] w-full">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
    );
};

export default PageLoader;
