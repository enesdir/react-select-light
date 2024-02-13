import type { FocusEventHandler, KeyboardEvent, ReactNode } from 'react'
import type { FilterMatchEnum } from './constants/FilterMatch'
import type {
	CallbackFn,
	ContentOption,
	FocusedOption,
	Option,
	OptionValueCallback,
	RenderLabelCallback,
	RenderSelectMultiOptions,
} from './types'

export type SelectProps<T = never> = Readonly<{
	/** Filter ignores accents when matching strings. Default value is false. */
	filterIgnoreAccents?: boolean
	/** Filter ignores case when matching strings. Default value is true. */
	filterIgnoreCase?: boolean
	/** Position in source string to perform match. Default value is 'any'. */
	filterMatchFrom?: FilterMatchEnum
	/**
	 * When defined will take each option and generate a string used in the filtering process. By default, the
	 * stringified version of what is generated by getOptionLabel, if definded, or the option's label as a
	 * fallback. The MenuOption typed parameter that getFilterOptionString accepts contains a data property that
	 * represents the objects that comprise your options property.
	 */
	getFilterOptionString?: (option: ContentOption<T>) => string
	/**
	 * Callback function with a return type of Boolean. When it evaluates to a value of true, that option
	 * iteration will be rendered disabled. As an alternative, you can also pass a property of isDisabled with
	 * each option. Use one of these two options - they cannot both be specified.
	 */
	getIsOptionDisabled?: (data: T) => boolean
	getOptionLabel?: OptionValueCallback<T>
	getOptionValue?: OptionValueCallback<T>
	id?: string
	isAsync?: boolean
	isAutoFocus?: boolean
	isBackspaceClearsValue?: boolean
	isBlurInputOnSelect?: boolean
	isCaseSensitiveSearch?: boolean
	isClearable?: boolean
	/**
	 * Close the dropdown of options when the user selects an option. Default value is false, however, it may be
	 * benefical to set this property to true for convenience in multi-select scenarios.
	 */
	isCloseOnSelect?: boolean
	isDisabled?: boolean
	isError?: boolean
	/**
	 * Hide the selected option from the menu. Default value is false, however, if undefined and isMulti is
	 * true, then its value defaults to true.
	 */
	isHideSelectedOptions?: boolean
	/**
	 * When true, a loading animation will appear in the far-right of the control and take the place of the
	 * clear icon (if shown). Additionally, it will hide options in the menu and instead, display a loading
	 * message. The loading message text defaults to 'Loading..', but can be overriden via the loadingMsg
	 * property.
	 */
	isLoading?: boolean
	/**
	 * The isMulti property to allow for multiple selections. While in multi-select mode, some properties are
	 * now applicable and others become more pertinent.
	 */
	isMulti?: boolean
	/** Click caret if false */
	isOpenDropDownOnClick?: boolean
	isOpenDropDownOnFocus?: boolean
	isSearchable?: boolean
	isShowCheckbox?: boolean
	/** Executed after the dropdown is closed */
	onDropDownClose?: CallbackFn
	/** Executed after the dropdown is opened */
	onDropDownOpen?: CallbackFn
	/** Executed after the input control is blurred */
	onInputBlur?: FocusEventHandler<HTMLInputElement>
	/** Executed after the input control's value changes */
	onInputChange?: (value?: string) => unknown
	/** Executed after the input control is focused */
	onInputFocus?: FocusEventHandler<HTMLInputElement>
	/** Executed after the onKeyDown event */
	onKeyDown?: (e: KeyboardEvent<Element>, input?: string, focusedOption?: FocusedOption<T>) => unknown
	/** Executed after an option is selected or removed */
	onOptionsChange?: (data: T) => unknown
	onRemove?: (selectedList: any, selectedItem: any) => void
	/**
	 * Executed after the input value is persisted to state; this value also evaluates the inputDelay property
	 * for debouncing - this callback is really only useful when inputDelay is defined, and if not, it probably
	 * makes more sense to use the onInputChange callback
	 */
	onSearchChange?: (value?: string) => unknown
	onSelect?: (selectedList: any, selectedItem: any) => void
	optionValueDecorator?: (v: string, option: ContentOption<T>) => ReactNode | string
	options: T[]
	pageSize?: number
	placeholder?: string
	preSelectedValues?: any
	renderContentOption?: (v: string, option: ContentOption<T>) => ReactNode | string
	renderSelectLabel?: RenderLabelCallback<T>
	/* Optional callback function that can be used to further customize the selection label in multi-select scenarios. params is an object that contains the selected and renderOptionLabel properties (array of selected options and function used to render individual option labels, respectively). When this function is defined, left and right arrow navigation of individual options is disabled. When using this property, it may be be a good idea to set the property backspaceClearsValue to false in order to avoid accidentally clearing all selections when searching. */
	renderSelectMultiOptions?: RenderSelectMultiOptions<T>
	/**
	 * This can be set to a positive integer in order to debounce updates to the search input value following
	 * input change events. This property directly maps to the delay in milliseconds passed to the setTimeout
	 * method.
	 */
	searchDelay?: number
	selectedValues?: Option<T>[]
	tabSelectsOption?: boolean
}>
