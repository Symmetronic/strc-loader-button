import { Component, h, Prop } from '@stencil/core';

/**
 * A button that can display a loading state.
 */
@Component({
  tag: 'strc-loader-button',
  styleUrl: 'loader-button.scss',
  shadow: false
})
export class LoaderButton {

  /**
   * True if the button is disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * True gives feedback that something is loading.
   */
  @Prop() loading: boolean = false;

  /**
   * The label displayed when loading.
   */
  @Prop() loadingLabel: string = 'Loading';

  /**
   * The button's type.
   */
  @Prop() type: string = 'button';

  /**
   * Renders a loader button component.
   */
  render() {
    return (
      <button
        class={this.loading ? 'loading' : null}
        disabled={this.disabled || this.loading}
        type={this.type}
      >
        <span class='loader'>
          { /* SOURCE: Material Design Icons. https://material.io/resources/icons/ */ }
          <svg
            class='spin'
            version='1.1'
            viewBox='0 0 18 18'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M9 13.5c-2.49 0-4.5-2.01-4.5-4.5S6.51 4.5 9 4.5c1.24 0 2.36.52 3.17 1.33L10 8h5V3l-1.76 1.76C12.15 3.68 10.66 3 9 3 5.69 3 3.01 5.69 3.01 9S5.69 15 9 15c2.97 0 5.43-2.16 5.9-5h-1.52c-.46 2-2.24 3.5-4.38 3.5z' />
          </svg>
          {this.loadingLabel}
        </span>
        <span class='content'>
          <slot />
        </span>
      </button>
    );
  }
}
