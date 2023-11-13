import { Cookies } from "react-cookie";

class CookieService {

    private cookies = new Cookies()

    get(label: string) {
        return this.cookies.get(label)
    }

    set(label: string, value: string | number) {
        return this.cookies.set(label, value)
    }

    delete(label: string) {
        return this.cookies.remove(label)
    }
}

export default new CookieService();
  