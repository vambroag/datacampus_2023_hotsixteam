package com.Datacampus.Team5.constants;

import java.util.HashMap;

public class PageSet {
    public static final HashMap<String, String> PAGE_SET = new HashMap<>();
    static {
        PAGE_SET.put("10000", "vitaminA");
        PAGE_SET.put("10001", "thiamine");
        PAGE_SET.put("10010", "Riboflavin");
        PAGE_SET.put("10011", "nothing");
        PAGE_SET.put("10100", "folate");
        PAGE_SET.put("10101", "vitaminC");
        PAGE_SET.put("10110", "vitaminD");
        PAGE_SET.put("10111", "vitaminE");
        PAGE_SET.put("11000", "calcium");
        PAGE_SET.put("11001", "kalium");
        PAGE_SET.put("11010", "magnesium");
        PAGE_SET.put("11011", "iron");
        PAGE_SET.put("11100", "zinc");
        PAGE_SET.put("11111", "healthy");
    }
}
