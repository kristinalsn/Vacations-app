class Config {
    public vacationsUrl = "http://localhost:3001/api/vacations/";
    public imageUrl = "http://localhost:3001/api/vacations/images/";
    public registerUrl = "http://localhost:3001/api/register/";
    public loginUrl = "http://localhost:3001/api/login/";
    public likesUrl = "http://localhost:3001/api/";

    public likesStatisticUrl = "http://localhost:3001/api/likes/statistic/";
    public allLikesUrl = "http://localhost:3001/api/likes/all/";


    assetsUrl: string | undefined;
}

export const appConfig = new Config(); //

