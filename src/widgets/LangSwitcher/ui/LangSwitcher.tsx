import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback } from 'react';
import i18n from 'shared/i18n/i18n';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?:string;
}

export const LangSwitcher = (props:LangSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const languageChangeHandler = useCallback(() => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }, []);
    return (
        <button onClick={languageChangeHandler} className={classNames(cls.LangSwitcher, { [className]: !!className })}>
            {t('lang')}
        </button>
    );
};
