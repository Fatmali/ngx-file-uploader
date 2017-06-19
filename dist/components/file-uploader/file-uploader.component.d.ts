import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class FileUploderComponent implements ControlValueAccessor {
    source: any;
    uploadStarted: EventEmitter<any>;
    uploadCompleted: EventEmitter<any>;
    _imagePath: string;
    uploading: boolean;
    private innerValue;
    private onTouchedCallback;
    private onChangeCallback;
    value: any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    private onBlur();
    private onChange(event);
    private clear();
}
