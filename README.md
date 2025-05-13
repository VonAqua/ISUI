# ISUI/EVT

---

👉[Лабораторные работы и КУРСОВАЯ РАБОТА тут](https://vonaqua.github.io/ISUI/)👈

---

## 📝 Мои контактные данные

- **E-mail:** oldscoperu@gmail.com
- **Telegram:** @VonAcco
- **GitHub:** [github.com/VonAqua](https://github.com/VonAqua)

## Кто я ❓

🎇Я🎇 - белорусский студент 3 курса БГУИР, собираюсь найти работу и закончить универ ( как получится ). Не люблю вставать по утрам и ехать куда-то. Я усидчивый, терпеливый и любознательный. Моя любимая мудрость: _"Мудрецы говорят, неважно, насколько ты слеп или насколько плох твой вкус. Просто попробуй всё, потому что жизнь становится проще, когда ты испытал каждый выбор."_

Также я люблю слушать музыку большинтсва-а-а-а жанров (перечислить просто невозможноя, учитывая сколько жанров развелось на данный момент) 🎧🎵 

🎵 **FEX - Subways of Your Mind** 🎵⠀  
─⚪────────────────────────────  
⠀▐▐ ⠀►▏ ⠀⠀──○─ 🔊 ⠀0:01 / 4:06  
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ᴴᴰ⚙ ❐ ⊏⊐  

## 📑 Навыки

- _Git_
- _SQL_
- _HTML_
- _CSS_
- Могу работать ночами без сна 💤 (не больше 2-ух дней)
- Владею английским языком на уровне B1-B2 (Правда разговорный, ввиду отсутсвия практики, оставляет желать лучшего 😔)

## Опыт


<div id="header" align="center">
  <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTMzNTY0a2o2eWQ5aGNqNHMzZ2UwNGltdnJydXVyOHdpcGhrejhjaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Dg4TxjYikCpiGd7tYs/giphy.gif" width="100"/>
</div>


Опыта, кроме написания курсовых работ - нет, но зато есть гифка с енотиком 👆.

## Курсовой проект на тему "Информационно-справочная система для сотрудников музея"

Я разрабатывал информационно-справочную систему для сотрудников музея в рамках курсовой работы. Система включает в себя базу данных и графический интерфейс для управления данными о музейных экспонатах, сотрудниках и посетителях.

- БД - _MS SQL Server_
- Клиент - _Java_ + _JDBC_

## Образование

| Год                      | Учебное заведение | Специальность         | Факультет  |
| -------------------------| ------------------| ----------------------| -----------|
| 2022 – по настоящее время| БГУИР             | Инженер-системотехник | ФКП        |


## ⚡ Пример кода на Java

Ниже — реализация **быстрой сортировки** на Java:

```java
public class QS {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }

    public static void main(String[] args) {
        int[] arr = {9, 3, 7, 4, 1, 6};
        quickSort(arr, 0, arr.length - 1);
        System.out.println("Отсортированный массив:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```


## 😅 Статы моего аккаунта


[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=VonAqua&theme=dark&locale=ru)](https://git.io/streak-stats)


![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=VonAqua&show_icons=true&theme=tokyonight)


[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=VonAqua&layout=compact&theme=vision-friendly-dark)](https://github.com/anuraghazra/github-readme-stats)

---
