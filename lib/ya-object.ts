import {
    EcommerceAdd,
    EcommerceClick,
    EcommerceDetail,
    EcommerceImpressions,
    EcommercePurchase,
    EcommerceRemove,
    SubParams,
    YaMetrika
} from './types'
import {prepareEcommerceDataLayer} from './ecommerce'

export class YaMetrikaObject implements YaMetrika {
    metrika: YaMetrika | null = null

    setMetrika(metrika: YaMetrika | null) {
        this.metrika = metrika

        this._setFunctions()
    }

    addFileExtension(vals: string | string[]): void {
        console.error('Method not implemented.')
    }

    extLink(url: string, options?: SubParams | undefined): void {
        console.error('Method not implemented.')
    }

    file(url: string, options?: SubParams | undefined): void {
        console.error('Method not implemented.')
    }

    getClientID(callback: (clientID: string) => void): void {
        console.error('Method not implemented.')
    }

    hit(url: string, options?: SubParams | undefined): void {
        console.error('Method not implemented.')
    }

    notBounce(options?: { callback: () => void; ctx?: any } | undefined): void {
        console.error('Method not implemented.')
    }

    params(parameters: any[] | { [key: string]: any }): void {
        console.error('Method not implemented.')
    }

    reachGoal(
        target: string,
        params?:
            | { order_price?: number | undefined; currency?: string | undefined }
            | undefined,
        callback?: (() => void) | undefined,
        ctx?: any
    ): void {
        console.error('Method not implemented.')
    }

    replacePhones(): void {
        console.error('Method not implemented.')
    }

    setUserID(userID: string): void {
        console.error('Method not implemented.')
    }

    userParams(parameters: { [key: string]: any }): void {
        console.error('Method not implemented.')
    }

    ecommerceImpressions(data: EcommerceImpressions): void {
        this.pushToDatalayer(data)
    }

    ecommerceClick(data: EcommerceClick): void {
        this.pushToDatalayer(data)
    }

    ecommerceDetail(data: EcommerceDetail): void {
        this.pushToDatalayer(data)
    }

    ecommerceAdd(data: EcommerceAdd): void {
        this.pushToDatalayer(data)
    }

    ecommerceRemove(data: EcommerceRemove): void {
        this.pushToDatalayer(data)
    }

    ecommercePurchase(data: EcommercePurchase): void {
        this.pushToDatalayer(data)
    }

    private _setFunctions() {
        const m = this.metrika
        if (!m) {
            return
        }

        this.addFileExtension = m.addFileExtension?.bind(m)
        this.extLink = m.extLink?.bind(m)
        this.file = m.file?.bind(m)
        this.getClientID = m.getClientID?.bind(m)
        this.hit = m.hit?.bind(m)
        this.notBounce = m.notBounce?.bind(m)
        this.params = m.params?.bind(m)
        this.reachGoal = m.reachGoal?.bind(m)
        this.replacePhones = m.replacePhones?.bind(m)
        this.setUserID = m.setUserID?.bind(m)
        this.userParams = m.userParams?.bind(m)
    }

    private pushToDatalayer(data: unknown) {
        prepareEcommerceDataLayer()
        window.dataLayer.push({ecommerce: data})
    }
}
