# **React Design Patterns**

[Linkedin Course](https://www.linkedin.com/learning/react-design-patterns/)


## **Topics Covered**
1. Layout Components
2. Container Components
3. Controlled and Uncontrolled Components
4. Higher-Order Components
5. Custom Hooks Patterns
6. Funcational Programming and React


## Technologies used
- create-react-app
- styled-components

## **Notes**

### **Layout Components**
- Layout components are components in React whose primary concern is helping the user arrange other components they create on the page.
    - Examples of this include split screens, lists, and modals. The main idea of layout components is that your components shouldn't know or care where they are being displayed on the page. This gives you more flexibility in how you use them in the future.
- Helps to arrange components on a page
- Examples: 
    - Split Screens
    - List and Items
    - Modals
- our components shouldn't know where they're displayed

### **Container Components**

- Container components purpose: components shouldn't know where it's data is coming from

```javascript
    <Container>
        <Child {...} />
        <Child {...} />
        <Child {...} />
    </Container>

```