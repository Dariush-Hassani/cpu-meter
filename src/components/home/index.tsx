const HomeComponent = () => {
  return (
    <div className="mt-2 h-full flex flex-col gap-2">
      <div className="h-[400px] w-full flex gap-2">
        <div className="min-w-[600px] max-w-[600px] h-full ">
          <div className="max-h-[270px] min-h-[270px] flex gap-2 ">
            <div className="w-1/2 h-[270px] dark:bg-back-dark dark:border-border-dark border-1 rounded-lg">
              1
            </div>
            <div className="w-1/2 h-[270px] dark:bg-back-dark dark:border-border-dark border-1 rounded-lg">
              2
            </div>
          </div>
          <div className="h-full mt-2">
            <div className="h-[121px] w-full dark:bg-back-dark dark:border-border-dark border-1 rounded-lg"></div>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="w-full h-full dark:bg-back-dark dark:border-border-dark border-1 rounded-lg"></div>
        </div>
        <div className="min-w-[140px] max-w-[140px] h-full dark:bg-back-dark dark:border-border-dark border-1 rounded-lg"></div>
      </div>
      <div style={{ height: "calc(100% - 400px)" }} className="flex gap-2">
        <div className="w-1/2 h-full  flex flex-col gap-2">
          <div className="w-full h-1/2 dark:bg-back-dark dark:border-border-dark border-1 rounded-lg"></div>
          <div className="w-full h-1/2 dark:bg-back-dark dark:border-border-dark border-1 rounded-lg"></div>
        </div>
        <div className="w-1/2 h-full  flex flex-col gap-2">
          <div className="w-full h-1/2 dark:bg-back-dark dark:border-border-dark border-1 rounded-lg"></div>
          <div className="w-full h-1/2 dark:bg-back-dark dark:border-border-dark border-1 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
