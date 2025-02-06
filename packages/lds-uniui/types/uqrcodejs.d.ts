declare module 'uqrcodejs' {
    interface UQRCodeInstance {
        data: string;
        size: number;
        margin: number;
        correctLevel: number;
        foregroundImageBackgroundColor: string;
        canvasContext: any;
        loadImage(src: string): Promise<any>;
        make(): void;
        drawCanvas(): Promise<void>;
    }

    interface UQRCodeConstructor {
        new(): UQRCodeInstance;
        prototype: UQRCodeInstance;
    }

    const UQRCode: UQRCodeConstructor;

    export default UQRCode;
    export = UQRCode;
} 
