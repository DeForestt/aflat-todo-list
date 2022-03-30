.needs <String>

class TodoItem {
    private bool completed;
    private int priority;
    String date;
    String text;
    String name;
    private bool pinned;
    
    TodoItem init(String name, String text, String date);
    String serialize();
    bool isCompleted();
    bool isPinned();
    bool setPinned(bool pinned);
    int setCompleted(bool completed);
};

TodoItem deserialize(String input);