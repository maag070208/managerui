import { FormControl, FormGroup } from "@angular/forms";

export type IForm<T> = FormGroup<{[K in keyof T]: FormControl<T[K]>}>;