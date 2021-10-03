import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const EmojiAddIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M9 1C13.4183 1 17 4.58172 17 9C17 9.19805 16.9928 9.39442 16.9787 9.58886C16.6673 9.4314 16.3389 9.30268 15.997 9.20619C15.999 9.1377 16 9.06897 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C9.06897 16 9.1377 15.999 9.20619 15.997C9.30268 16.3389 9.4314 16.6673 9.58886 16.9787C9.39442 16.9928 9.19805 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1ZM6.15467 11.4273C7.02454 12.3027 8.19797 12.6929 9.33847 12.5969C9.33008 12.6191 9.32188 12.6415 9.31387 12.6641C9.20621 12.9682 9.12455 13.2846 9.07154 13.6106C7.76002 13.6292 6.44289 13.136 5.44533 12.1322C5.25069 11.9363 5.25169 11.6197 5.44757 11.4251C5.64344 11.2304 5.96002 11.2314 6.15467 11.4273ZM11.5 6.5C12.0523 6.5 12.5 6.94772 12.5 7.5C12.5 8.05228 12.0523 8.5 11.5 8.5C10.9477 8.5 10.5 8.05228 10.5 7.5C10.5 6.94772 10.9477 6.5 11.5 6.5ZM6.5 6.5C7.05228 6.5 7.5 6.94772 7.5 7.5C7.5 8.05228 7.05228 8.5 6.5 8.5C5.94772 8.5 5.5 8.05228 5.5 7.5C5.5 6.94772 5.94772 6.5 6.5 6.5ZM19 14.5C19 16.9853 16.9853 19 14.5 19C12.0147 19 10 16.9853 10 14.5C10 12.0147 12.0147 10 14.5 10C16.9853 10 19 12.0147 19 14.5ZM15 12.5C15 12.2239 14.7761 12 14.5 12C14.2239 12 14 12.2239 14 12.5V14H12.5C12.2239 14 12 14.2239 12 14.5C12 14.7761 12.2239 15 12.5 15H14V16.5C14 16.7761 14.2239 17 14.5 17C14.7761 17 15 16.7761 15 16.5V15H16.5C16.7761 15 17 14.7761 17 14.5C17 14.2239 16.7761 14 16.5 14H15V12.5Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M9 1C13.4183 1 17 4.58172 17 9C17 9.19805 16.9928 9.39442 16.9787 9.58886C16.2338 9.2122 15.3917 9 14.5 9C12.1314 9 10.1125 10.4973 9.33814 12.5969C8.19774 12.6928 7.02445 12.3026 6.15467 11.4273C5.96002 11.2314 5.64344 11.2304 5.44757 11.4251C5.25169 11.6197 5.25069 11.9363 5.44533 12.1322C6.44289 13.136 7.76002 13.6292 9.07154 13.6106C9.02447 13.9001 9 14.1972 9 14.5C9 15.3917 9.2122 16.2338 9.58886 16.9787C9.39442 16.9928 9.19805 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1ZM11.5 6.5C10.9477 6.5 10.5 6.94772 10.5 7.5C10.5 8.05228 10.9477 8.5 11.5 8.5C12.0523 8.5 12.5 8.05228 12.5 7.5C12.5 6.94772 12.0523 6.5 11.5 6.5ZM6.5 6.5C5.94772 6.5 5.5 6.94772 5.5 7.5C5.5 8.05228 5.94772 8.5 6.5 8.5C7.05228 8.5 7.5 8.05228 7.5 7.5C7.5 6.94772 7.05228 6.5 6.5 6.5ZM19 14.5C19 16.9853 16.9853 19 14.5 19C12.0147 19 10 16.9853 10 14.5C10 12.0147 12.0147 10 14.5 10C16.9853 10 19 12.0147 19 14.5ZM15 12.5C15 12.2239 14.7761 12 14.5 12C14.2239 12 14 12.2239 14 12.5V14H12.5C12.2239 14 12 14.2239 12 14.5C12 14.7761 12.2239 15 12.5 15H14V16.5C14 16.7761 14.2239 17 14.5 17C14.7761 17 15 16.7761 15 16.5V15H16.5C16.7761 15 17 14.7761 17 14.5C17 14.2239 16.7761 14 16.5 14H15V12.5Z"
      />
    </svg>
  ),
  displayName: 'EmojiAddIcon',
});
