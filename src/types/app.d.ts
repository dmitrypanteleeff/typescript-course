declare abstract class Logger {
    abstract log(message: string | Date): void;
    printDate(): void;
}
declare class LoggerDate extends Logger {
    log(message: string | Date): void;
    logWithDate(message: string): void;
}
declare const c: LoggerDate;
