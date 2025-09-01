# Задача.

Задача: отобразить дерево с данными с помощью таблицы.

## Описание:

Существует компонент `TreeAsTableComponent`, который принимает в качестве входного параметра дерево. Данные имеют следующий интерфейс:

```javascript
  interface ITreeNode {
    val: string | number;
    id: string;
    children?: ITreeNode[]
  }
```



