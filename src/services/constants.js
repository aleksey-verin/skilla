const filters = {
  types: [
    { name: 'Все типы', request: '' },
    { name: 'Входящие', request: '1' },
    { name: 'Исходящие', request: '0' },
  ],
  calls: [
    { name: 'Все звонки', request: '' },
    { name: 'Все клиенты', request: 'clients' },
    { name: 'Новые клиенты', request: 'new_clients' },
    { name: 'Все исполнители', request: 'workers' },
    { name: 'Через приложение', request: 'app' },
    { name: 'Прочие звонки', request: '' },
  ],
  sources: [
    { name: 'Все источники', request: '' },
    { name: 'Яндекс', request: 'yandex' },
    { name: 'Гугл', request: 'google' },
    { name: 'С сайта', request: 'from_site' },
    { name: 'Без источника', request: 'empty' },
  ],
  errors: [
    { name: 'Все ошибки', request: '' },
    { name: 'Приветствие', request: '' },
    { name: 'Имя', request: '' },
    { name: 'Цена', request: '' },
    { name: 'Скидка', request: '' },
    { name: 'Предзаказ', request: '' },
    { name: 'Благодарность', request: '' },
    { name: 'Стоп слова', request: '' },
  ],
  results: [
    { name: 'Все оценки', request: '' },
    { name: 'Распознать', request: 'noerrors' },
    { name: 'Скрипт не использован', request: 'noscript' },
    { name: 'bad', request: '' },
    { name: 'good', request: '' },
    { name: 'perfect', request: '' },
    { name: '*', request: '' },
    { name: '**', request: '' },
    { name: '***', request: '' },
  ],
}

export default filters
